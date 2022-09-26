import { PostDatabase } from "../database/PostDatabase"
import { AuthorizationError } from "../errors/AuthorizationError"
import { InvalidInputError } from "../errors/InvalidInputError"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { PostInputDTO } from "../types/postInputDTO"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    async createPost(post: PostInputDTO) {

        const { token } = post
        if (!token) {
            throw new InvalidInputError("First, you need to login and get a token")
        }

        const userTokenData = this.authenticator.getTokenPayload(token)

        if (!userTokenData) {
            throw new AuthorizationError('Invalid token')
        }

        const { description, type } = post
        let { create_at, image } = post

        if (!description || !type) {
            throw new InvalidInputError('Invalid input. Image, description, create_at, and type are required')
        }

        if (type !== 'NORMAL' && type !== 'EVENTO') {
            throw new InvalidInputError('Invalid type. Type must be NORMAL or EVENTO')
        }
    }

}