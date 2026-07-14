import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import type { CreateUsrPayload, LoginUserPayload } from "./user.interface"
import config from "../../config";
import jwt, { type JwtPayload, type SignOptions } from "jsonwebtoken"
import { jwtUtils } from "../../utils/jwt";


const createUserIntoDB = async (payload: CreateUsrPayload) => {
    const { name, email, password, profilePhoto } = payload;
    const isUserExist = await prisma.user.findUnique({
        where: {
            email

        }
    })
    if (isUserExist) {
        throw new Error("User with this email already exists")
    }

    const hashedPassword = await bcrypt.hash(password, Number(config.bcrypt_salt_rounds))

    const createdUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,

            profile: {
                create: {
                    ...(profilePhoto && { profilePhoto })
                }
            }
        }
    })


    const user = await prisma.user.findUnique({
        where: {
            id: createdUser.id,
            email: createdUser.email
        },
        include: {
            profile: true
        },
        omit: {
            password: true
        }
    })
    return user
}

const loginUser = async (payload: LoginUserPayload) => {
    const { email, password } = payload;
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email
        }
    })

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        throw new Error("Password is incorrect")
    }

    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    }

    const accessToken = jwtUtils.createToken(jwtPayload, config.jwt_access_secret, config.jwt_access_expires_in as SignOptions)

    const refreshToken = jwtUtils.createToken(jwtPayload, config.jwt_refresh_secret, config.jwt_refresh_expires_in as SignOptions)

    return {
        accessToken,
        refreshToken
    }
}

const getMyProfilefromDB = async (userId: string) => {

    const user = await prisma.user.findUniqueOrThrow({
        where: { id: userId },
        omit: { password: true },
        include: { profile: true }
    })

    return user

}

const getAllUsersFromDB = async () => {

    const users = await prisma.user.findMany({
        omit: { password: true }
    })
    return users

}

const updateUserStatusIntoDB = async (userid: string, changStatus: string) => {
    
    const updateUser = await prisma.user.update({
        where: {
            id: userid,
        },
        data: {
            status: changStatus,
        },
        omit:{
            password:true
        },
        include:{
            profile:true
        }
    });

    return updateUser;


}


export const userService = {
    createUserIntoDB,
    loginUser,
    getMyProfilefromDB,
    getAllUsersFromDB,
    updateUserStatusIntoDB
}