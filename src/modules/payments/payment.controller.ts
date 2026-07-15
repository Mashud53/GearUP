import type { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { paymentService } from "./payments.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status"


const createCheckoutSession = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id;
    const { gearId } = req.query;

    const result = await paymentService.createCheckoutSession(userId as string, gearId as string)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Checkout complete successfully",
        data: result
    })


})

const handlePaymentConfirm = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const event = req.body as Buffer
    const signature = req.headers['stripe-signature']!;

    await paymentService.handlePaymentConfirm(event, signature as string)

     sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "payment successfully",
       
    })
})

const getAllpayments=catchAsync(async (req: Request, res: Response, next: NextFunction)=>{
    const userId = req.user?.id
    const paymentResult = await paymentService.getAllpaymentsFromDB(userId as string)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payments retrived successfully",
        data: paymentResult
    })
})

const getPaymentDetails= catchAsync(async (req: Request, res: Response, next: NextFunction)=>{
    const {id }= req.params
    const result = await paymentService.getPaymentDetailsFromDB(id as string);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment retrived successfully",
        data: result
    })
})

export const paymentController = {
    createCheckoutSession,
    handlePaymentConfirm,
    getAllpayments,
    getPaymentDetails
}