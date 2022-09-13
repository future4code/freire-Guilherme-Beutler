import { User } from "../model/User"
import { BaseDataBase } from "./BaseDataBase";

export class UserDatabase extends BaseDataBase {

    private static TABLE_NAME = 'users_intro_authentication'

    async insertUser(user: User): Promise<void> {
        try {

            await BaseDataBase.connection()
                .insert({
                    id: user.getId(),
                    email: user.getEmail(),
                    password: user.getPassword()
                })
                .into(UserDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getUserByEmail(email: string): Promise<User | undefined> {
        try {
            const result = await BaseDataBase.connection()
                .select('*')
                .from(UserDatabase.TABLE_NAME)
                .where({ email })

            return result[0] ? new User(result[0].id, result[0].email, result[0].password) : undefined

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getUserById(id: string): Promise<User | undefined> {
        try {
            const result = await BaseDataBase.connection()
                .select('*')
                .from(UserDatabase.TABLE_NAME)
                .where({ id })

            return result[0] ? new User(result[0].id, result[0].email, result[0].password) : undefined

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}