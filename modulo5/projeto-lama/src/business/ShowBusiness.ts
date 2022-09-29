import { ShowDatabase } from "../database/ShowDatabase"
import { ParamsError } from "../errors/ParamsError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ShowInputDTO, ShowOutputDTO } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    public createShow = async (newShow: ShowInputDTO): Promise<ShowOutputDTO> => {
        const { bandId, starts_at, token } = newShow

        if (!bandId) {
            throw new ParamsError("Parâmetro 'bandId' inválido")
        }

        if (!starts_at) {
            throw new ParamsError("Parâmetro 'starts_at' inválido")
        }
        
        if (!token) {
            throw new ParamsError("Parâmetro 'token' inválido")
        }

        const userTokenData = this.authenticator.getTokenPayload(token)

        if (userTokenData?.role !== USER_ROLES.ADMIN) {
            throw new UnauthorizedError("'Token' inválido. Você precisa ser administrador para cadastrar a banda.")
        }



    }

}