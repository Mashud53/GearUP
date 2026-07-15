import cookieParser from "cookie-parser";
import express, { type Application, type Request, type Response } from "express"
import cors from "cors"
import config from "./config";
import { userRoute } from "./modules/users/user.route";
import { gearRouter } from "./modules/gears/gears.routes";
import { paymentRoutes } from "./modules/payments/payments.routes";
import { stripe } from "./lib/stripe";

const app: Application = express()

app.use(cors({
    origin: config.app_url,
    credentials: true,
}))
const endpointSecret = config.stripe_webhook_secret

// app.post("/api/payment/confirm", 
//     express.raw({ type: 'application/json' }), 
//     (request, response) => {
//     let event = request.body;
//     console.log(event, "==stripe request body");
//     console.log(request.headers, "stripe request headers");
//     // Only verify the event if you have an endpoint secret defined.
//     // Otherwise use the basic event deserialized with JSON.parse
//     if (endpointSecret) {
//         // Get the signature sent by Stripe
//         const signature = request.headers['stripe-signature']!;
//         try {
//             event = stripe.webhooks.constructEvent(
//                 request.body,
//                 signature ,
//                 endpointSecret
//             );
//         } catch (err: any) {
//             console.log(`⚠️  Webhook signature verification failed.`, err.message);
//             return response.status(400).json({
//                 message: err.message
//             });
//         }
//     }

//     console.log(event, "event after try block");

//     // Handle the event
//     switch (event.type) {
//         case 'payment_intent.succeeded':
//             const paymentIntent = event.data.object;
//             console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
//             // Then define and call a method to handle the successful payment intent.
//             // handlePaymentIntentSucceeded(paymentIntent);
//             break;
//         case 'payment_method.attached':
//             const paymentMethod = event.data.object;
//             // Then define and call a method to handle the successful attachment of a PaymentMethod.
//             // handlePaymentMethodAttached(paymentMethod);
//             break;
//         default:
//             // Unexpected event type
//             console.log(`Unhandled event type ${event.type}.`);
//     }

//     // Return a 200 response to acknowledge receipt of the event
//     response.send();
// })

app.use("/api/payment/confirm",  express.raw({ type: 'application/json' }))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/", (req: Request, res: Response) => {
    res.send("Hellow GearUp")
})

app.use("/api/auth", userRoute)
app.use("/api", gearRouter)
app.use("/api/payment", paymentRoutes)

export default app