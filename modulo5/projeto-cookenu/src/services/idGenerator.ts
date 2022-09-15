import { v4 } from "uuid";

export class GenerateId {
    generateId(): string {
        const id: string = v4()
        return id
    }
}
