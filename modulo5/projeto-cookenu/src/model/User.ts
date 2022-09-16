export enum USER_ROLES {
    ADMIN = 'admin',
    USER = 'user'
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) { }
    
    getId(): string {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getEmail(): string {
        return this.email
    }

    getPassword(): string {
        return this.password
    }

    getRole(): USER_ROLES {
        return this.role
    }

    static toUserModel(user: any): User {
        return new User (
            user.id,
            user.name,
            user.email,
            user.password,
            user.role
        )
    }


}