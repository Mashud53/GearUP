import type { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { gearServices } from "./gears.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status"
import type { UpdatePayload } from "./gears.interface";

const createGear = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body
    const result = await gearServices.createGearIntoDB(payload)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Gear created successfully",
        data: { result }
    })
})


const getAllGear = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
   const query = req.query;
        
    const result = await gearServices.getAllGearfromDB(query)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Gears retrived successfully",
        data: { result }
    })

})

const updateGear = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const payload = req.body;
    const updateResult = await gearServices.updateGearIntoDB(id as string, payload as UpdatePayload)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Gears Update successfully",
        data: { updateResult }
    })
})

const removeGear = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    await gearServices.removeGearFromDB(id as string)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Gears Remove successfully",

    })

})

const getGearDetails = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await gearServices.getGearDetailsFromDB(id as string)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Gears Retrived successfully",
        data: { result }

    })
})

const getAllCategories =catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
    const result = await gearServices.getAllGearCateFromDB()
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Gears category retrive successfully",
        data: { result }
    })
})


export const gearController = {
    createGear,
    getAllGear,
    updateGear,
    removeGear,
    getGearDetails,
    getAllCategories
}