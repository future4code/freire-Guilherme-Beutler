import { PostBusiness } from "../src/business/PostBusiness"
import { BaseError } from "../src/errors/BaseError"
import { ICreatePostInputDTO, IGetPostsInputDTO, Post } from "../src/models/Post"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"

describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Deve retornar uma lista de posts", async () => {
        const input: IGetPostsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBe(3)
        expect(response.posts[0]).toBeInstanceOf(Post)
    })

    test("Deve ser possível criar um novo post", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: "Teste do mock"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toBe("Post criado com sucesso")
        expect(response.post).toBeInstanceOf(Post)
        expect(response.post.getId()).toBe("id-mock")
        expect(response.post.getContent()).toBe("Teste do mock")
        expect(response.post.getLikes()).toBe(0)
        expect(response.post.getUserId()).toBe("id-mock")
    })

    test('Retorna erro para credenciais inválidas', async () => {
        expect.assertions(2)

        try {

            const input: ICreatePostInputDTO = {
                token: "tokenmocknormal",
                content: "Teste do mock"
            }

            await postBusiness.createPost(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })

    test('Retorna erro se "content" for diferente de string', async () => {
        expect.assertions(2)

        try {

            const input: ICreatePostInputDTO = {
                token: "token-mock-normal",
                content: undefined
            } as unknown as ICreatePostInputDTO

            await postBusiness.createPost(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'content' inválido")
            }
        }
    })

    test('Retorna erro quando "content" for menor que 1 caractere', async () => {
        expect.assertions(2)

        try {

            const input: ICreatePostInputDTO = {
                token: "token-mock-normal",
                content: ""
            }

            await postBusiness.createPost(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'content' inválido: mínimo de 1 caracteres")
            }
        }
    })

    test('Retorno de erro credencial getPost', async () => {
        expect.assertions(2)

        try {
            
            const input: IGetPostsInputDTO = {
                token:"tokenmock-normal"
            }

            await postBusiness.getPosts(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas" )
            }
        }
    })
})