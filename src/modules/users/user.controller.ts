import type { NextFunction, Request, Response } from "express"
import { userService } from "./user.service";
import httpStatus from "http-status"
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";




const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const payload = req.body;

    const result = await userService.createUserIntoDB(payload)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "user created successfully",
        data: { result }
    })


})

const loginUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body
    const { accessToken, refreshToken } = await userService.loginUser(payload)

    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24
    })

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7
    })

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "user login successfully",
        data: { accessToken, refreshToken }
    })
})


const getMyProfile = catchAsync(async (req: Request, res: Response, next: NextFunction) => {


    const profile = await userService.getMyProfilefromDB(req.user?.id as string)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "user retrieved successfully",
        data: profile
    })

})

const getAllusers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const users = await userService.getAllUsersFromDB();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "users retrieved successfully",
        data: users
    })
})

const updateUserStatus = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const {status} = req.body
    const allowedStatus = ["ACTIVE", "SUSPEND"]
    if(!allowedStatus.includes(status)){
        throw new Error("Invalid status")
    }
    const updateRes = await userService.updateUserStatusIntoDB(id as string, status as string)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User Status update successfully",
        data: updateRes
    })

})




export const userController = {
    createUser,
    loginUser,
    getMyProfile,
    getAllusers,
    updateUserStatus
}