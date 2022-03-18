import { CreatePostInputDTO, Post } from "../model/Post"
import { IdGeneration } from "../services/idGenerator"
import { Authenticator } from "../services/Authenticador"
import { PostRepository } from "./PostRepository"

export class PostBusiness {
    private postData: PostRepository
    private idGenerator: IdGeneration
    private authentication: Authenticator

    constructor(postDataImplementation: PostRepository) {
        this.postData = postDataImplementation
        this.idGenerator = new IdGeneration()
        this.authentication = new Authenticator()
    }
    createPost = async (input: CreatePostInputDTO, token: string) => {
        const { photo, description, type, author_id } = input
        const id = this.idGenerator.generateId()

        if (!photo || !description || !type || !author_id) {
            throw new Error('Verifique se todos os campos estão preenchidos')
        }

        const verifyToken = this.authentication.getTokenData(token)
        if (!verifyToken) {
            throw new Error('Token inválido')
        }

        const created_at = new Date().getTime()

        const post = new Post(
            id,
            photo,
            description,
            type,
            created_at,
            author_id
        )

        await this.postData.insert(post)
        return 'Postado'
    }
    getPostById = async (id: string, token: string) => {
        if (!id) {
            throw new Error('Insira um Id válido')
        }

        const verifyToken = this.authentication.getTokenData(token)
        if (!verifyToken) {
            throw new Error('Token inválido')
        }

        const result = await this.postData.getPostById(id)
        return result
    }
}

