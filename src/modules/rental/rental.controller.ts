import type { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { rentalService } from "./rental.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status"
import type { RentStatus } from "../../../generated/prisma/enums";

const allRentalOrders = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await rentalService.allRentalFromDB()
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Rental retrive successfully",
        data: result

    })
});

const getRentalDetails = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await rentalService.getRentalDetails(id as string)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Rental Details retrive successfully",
        data: result

    })
});

const updateRental = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const {status} = req.body
    const result = await rentalService.updateRental(id as string, status as RentStatus);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Rental Update successfully",
        data: result

    })
})


export const rentalController = {
    allRentalOrders,
    getRentalDetails,
    updateRental
}