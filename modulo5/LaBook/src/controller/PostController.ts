import {Request, Response} from 'express'
import { PostDatabase } from '../data/PostDatabase'
import { PostBusiness } from '../business/PostBusiness'
import { CreatePostInputDTO } from '../model/Post'


export class PostController {
    private postBusiness: PostBusiness
    constructor() {
        this.postBusiness = new PostBusiness(
            new PostDatabase()
        )
    }
    createPost = async(req:Request, res:Response) =>{
        const {photo, description, type, author_id}  = req.body
        const token = req.headers.authorization as string

        const post: CreatePostInputDTO = {
            photo,
            description,
            type,
            author_id
        }
        try{
            const result = await this.postBusiness.createPost(post, token)
            console.log(result)
            res.status(201).send(result)

        } catch(e:any){
            if(e.message) return res.status(400).send(e.message)
            res.status(400).send("Erro ao tentar criar post")
        }
    }
    getPostById = async(req:Request, res:Response) =>{
        const id = req.params.id
        const token = req.headers.authorization as string
        
        try{
            const reuslt = await this.postBusiness.getPostById(id, token)
        } catch(e:any){
            if(e.message) return res.status(400).send(e.message)
            res.status(400).send('Post não existe')
        }
    }
}
