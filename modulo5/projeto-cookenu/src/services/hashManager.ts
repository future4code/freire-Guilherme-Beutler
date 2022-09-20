import * as bcrypt from "bcryptjs";

export class HashManager {

    async createHash(plainText: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(plainText, salt);
        return result;
    }

    async compareHash(plainText: string, hash: string): Promise<boolean> {
        return bcrypt.compare(plainText, hash);
    }
}