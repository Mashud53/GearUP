import type { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { reviewService } from "./reviews.service";
import type { ReviewPayload } from "./reviews.interface";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status"

const createReviews = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id;
    const { id } = req.params;
    const payload = req.body;

    console.log(id,"rental controller=====");

    const result = await reviewService.createReviews(userId as string, id as string, payload as ReviewPayload)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Review created successfully",
        data: result 
    })
})

export const reviesController = {
    createReviews
}