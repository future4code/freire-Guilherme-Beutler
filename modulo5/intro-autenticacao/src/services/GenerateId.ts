import { v4 } from "uuid"

export class GenerataId {
    generateId(): string {
        const id: string = v4()
        return id
    }
}