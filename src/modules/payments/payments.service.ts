import { use } from "react"
import { prisma } from "../../lib/prisma"
import { stripe } from "../../lib/stripe"
import config from "../../config"

const createCheckoutSession = async (userId: string, gearId: string) => {
    console.log(userId, gearId);
    const transactionResult = await prisma.$transaction(async (tx) => {
        const user = await prisma.user.findUniqueOrThrow({
            where: { id: userId }
        })

        const gear = await prisma.gear.findUniqueOrThrow({
            where: {
                id: gearId
            }
        })

        const session = await stripe.checkout.sessions.create({
            mode: "payment",

            customer_email: user.email,

            payment_method_types: ["card"],

            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: gear.name,

                        },

                        unit_amount: Math.round(gear.price * 100),

                    }
                }
            ],
            metadata: {
                userId,
                gearId,
            },
            success_url: `${config.app_url}/create?success=true`,
            cancel_url: `${config.app_url}/create?success=false`,
        });

        return {
            sessionId: session.id,
            checkoutUrl: session.url,
        }

    })
    return transactionResult

}


const handlePaymentConfirm = async (
  payload: Buffer,
  signature: string
) => {
  const event = stripe.webhooks.constructEvent(
    payload,
    signature,
    config.stripe_webhook_secret as string
  );

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      const userId = session.metadata?.userId;
      const gearId = session.metadata?.gearId;

      if (!userId || !gearId) {
        throw new Error("Missing metadata");
      }

      await prisma.$transaction(async (tx) => {
        const gear = await tx.gear.findUniqueOrThrow({
          where: { id: gearId },
        });

        const rental = await tx.rental.create({
          data: {
            userId,
            gearId,
            totalAmount: session.amount_total! / 100,
            status: "CONFIRMED",
          },
        });

        await tx.payment.create({
          data: {
            rentalId: rental.id,
            transactionId: session.payment_intent as string,
            amount: session.amount_total! / 100,
            status: "PAID",
          },
        });

        await tx.gear.update({
          where: { id: gearId },
          data: {
            stock: {
              decrement: 1,
            },
          },
        });
      });

      break;
    }

    default:
      console.log(`Unhandled event type ${event.type}`);
  }
};

const getAllpaymentsFromDB =async(userId : string)=>{
    const result = await prisma.payment.findMany({
        where:{
            rental:{
                userId
            }
        },
        include:{
           rental:{
            include:{
                gear :true
            }
           }
        }
    })
    return result
}

const getPaymentDetailsFromDB = async(paymentId: string)=>{
    const result = await prisma.payment.findUniqueOrThrow({
        where:{
            id: paymentId
        }
    })

    return result
}

export const paymentService = {
    createCheckoutSession,
    handlePaymentConfirm,
    getAllpaymentsFromDB,
    getPaymentDetailsFromDB
}