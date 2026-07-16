import { prisma } from "../../lib/prisma"
import type { FilterGear, GearPaylod, UpdatePayload } from "./gears.interface"

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

const getAllGearfromDB = async (query: FilterGear) => {
    const gearResult = await prisma.gear.findMany({
        where: {
            AND: [
                query.category ? { category: query.category } : {},
                query.brand ? { brand: query.brand } : {},
                query.price ? { price: parseFloat(query.price) } : {}
            ]
        }
    })

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

const getGearDetailsFromDB = async (id: string) => {
    const result = await prisma.gear.findUniqueOrThrow({
        where: { id }
    })

    return result

}

const removeGearFromDB = async (id: string) => {
    const gear = await prisma.gear.findUnique({
        where:{id}
    })
    if(!gear){
        throw new Error ("Gear not found")
    }
    await prisma.gear.delete({
        where: { id }
    })
    return null

}

const getAllGearCateFromDB = async () => {


    const allCategories = await prisma.gear.findMany({
        select: {
            category: true
        },
        distinct: ["category"]
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