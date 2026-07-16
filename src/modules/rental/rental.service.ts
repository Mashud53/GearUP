import type { RentStatus } from "../../../generated/prisma/enums"
import { prisma } from "../../lib/prisma"

const allRentalFromDB = async () => {

    const result = await prisma.rental.findMany({})
    return result

}

const getRentalDetails = async (id: string) => {
    const result = await prisma.rental.findUniqueOrThrow({
        where: {
            id
        }
    })

    return result
}

const updateRental = async (id: string, payload: RentStatus) => {
       

    const updateResult = await prisma.rental.update({
        where:{
            id
        },
        data:{status:payload}
    })

    return updateResult

}


export const rentalService = {
    allRentalFromDB,
    getRentalDetails,
    updateRental
}