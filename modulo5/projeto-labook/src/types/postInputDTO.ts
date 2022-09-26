import { POST_TYPE } from "../models/Post"

export type PostInputDTO = {
    image: string,
    description: string,
    create_at?: Date,
    type: POST_TYPE,
    token: string
}