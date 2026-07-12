import jwt, { type JwtPayload, type SignOptions } from "jsonwebtoken"

const createToken = (payload: JwtPayload, secret: string, expairesIn: SignOptions) => {
    const token = jwt.sign(payload, secret, {
        expiresIn: expairesIn
    } as SignOptions
    )

    return token
}



export const jwtUtils = {
    createToken
}