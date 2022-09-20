export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private create_at: Date,
        private creator_userId: string
    ) { }

    getId(): string {
        return this.id
    }

    getTitle(): string {
        return this.title
    }

    getDescription(): string {
        return this.description
    }

    getCreateAt(): Date {
        return this.create_at
    }

    getCreatorUserId(): string {
        return this.creator_userId
    }

    static toRecipeModel(recipe: any): Recipe {
        return new Recipe(
            recipe.id,
            recipe.title,
            recipe.description,
            recipe.create_at,
            recipe.creator_userId
        )
    }

    setDate(data: any): void {
        this.create_at = data
    }
}