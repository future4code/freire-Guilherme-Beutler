import { ROLE_TYPE } from "../types"

export class User {
    constructor (
        private id: string,
        private email: string,
        private password: string,
        private role: ROLE_TYPE
    ) {}

    getId(): string {
        return this.id
    }

    getEmail(): string {
        return this.email
    }

    getPassword(): string {
        return this.password
    }

    getRole(): string {
        return this.role
    }
}