import { prisma } from "../../lib/prisma"
import type { GearPaylod, UpdatePayload } from "./gears.interface"

const createGearIntoDB = async (payload: GearPaylod) => {
    const { name, description, price, category, brand, available, stock } = payload
    const gearResult = await prisma.gear.create({
        data: {
            name,
            description,
            price,
            category,
            brand,
            available,
            stock

        }
    })

    return gearResult

}

const getAllGearfromDB = async () => {
    const gearResult = await prisma.gear.findMany({})

    return gearResult
}

const updateGearIntoDB = async (id: string, payload: UpdatePayload) => {
    // const { name, description, price, category, brand, available, stock } = payload
    const updateResult = await prisma.gear.update({
        where: { id },
        data: payload
    })

    return updateResult


}

const getGearDetailsFromDB =async(id:string)=>{
    const result = await prisma.gear.findUniqueOrThrow({
        where:{id}
    })

    return result

}

const removeGearFromDB = async (id: string) => {
    await prisma.gear.delete({
        where: { id }
    })
    return null

}

const getAllGearCateFromDB =async()=>{

    console.log("gear categories ========");
    const allCategories = await prisma.gear.findMany({
        select:{
            category:true
        },
        distinct:["category"]
    })

    return allCategories
}


export const gearServices = {
    createGearIntoDB,
    getAllGearfromDB,
    updateGearIntoDB,
    removeGearFromDB,
    getGearDetailsFromDB,
    getAllGearCateFromDB
}