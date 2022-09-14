import { sign, verify } from "jsonwebtoken"
import { AuthenticationData } from "../types"

export class Authenticator {

    generateToken(payload: AuthenticationData) {
        const token = sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXPIRES_IN
            })
        return token
    }

    getTokenData(token: string): AuthenticationData {
        const payload = verify(
            token,
            process.env.JWT_KEY as string
        )
        return payload as AuthenticationData
    }
}