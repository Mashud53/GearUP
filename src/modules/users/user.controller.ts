import type { NextFunction, Request, Response } from "express"
import { userService } from "./user.service";
import httpStatus from "http-status"
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import jwt, { type JwtPayload } from "jsonwebtoken"
import config from "../../config";
import { jwtUtils } from "../../utils/jwt";


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
    console.log(req.user, "user controller ===========");

    const profile = await userService.getMyProfilefromDB(req.user?.id as string)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "user retrieved successfully",
        data: profile
    })

})




export const userController = {
    createUser,
    loginUser,
    getMyProfile
}