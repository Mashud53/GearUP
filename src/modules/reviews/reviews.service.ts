import { prisma } from "../../lib/prisma"
import type { ReviewPayload } from "./reviews.interface"

const createReviews = async (userId: string, rentalId: string, payload: ReviewPayload) => {


    // const transactionResult = await prisma.$transaction(async (tx) => {

    //     const rental = await tx.rental.update({
    //         where: { id: rentalId },
    //         data: { status: "RETURNED" }
    //     })


    //     const existingReviews = await tx.review.findFirst({
    //         where: {
    //             userId,
    //             gearId: rental.gearId

    //         }
    //     })

    //     if (existingReviews) {
    //         throw new Error("You have already reviewed this gear!")
    //     }

    //     const review = await tx.review.create({
    //         data: {
    //             rating,
    //             comment,
    //             userId,
    //             gearId: rental.gearId
    //         }
    //     })

    //     return review

    // })
    const { rating, comment } = payload;
    console.log(payload,rentalId, "review service================");
    return await prisma.$transaction(async(tx)=>{
        const rental = await tx.rental.findUniqueOrThrow({
            where:{id: rentalId}
        })

        if(!rental){
            throw new Error("Rental not found")
        }

        if(rental.userId !== userId){
            throw new Error("You are not authorize to review this rental")
        }

        const existingReviews = await tx.review.findFirst({
            where:{
                userId,
                gearId: rental.gearId
            }
        })

        if(existingReviews){
            throw new Error("You have already reviewed this gear")
        }
        await tx.rental.update({
            where:{
                id:rentalId
            },
            data:{
                status:"RETURNED"
            }
        })

        const review = await tx.review.create({
            data:{
                rating,
                comment,
                userId,
                gearId:rental.gearId,
            }
        })

        return review;
    })
   


}

export const reviewService = {
    createReviews
}