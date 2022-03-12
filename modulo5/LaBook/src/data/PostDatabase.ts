import { Post } from "../model/Post";
import { PostRepository } from "../business/PostRepository";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase implements PostRepository{
    insert = async(post:Post, idUser:string) =>{
        try{
            await BaseDatabase.connection()
            .insert({
                id: post.getId(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                type: post.getType(),
                created_at: post.getCreatedAt(),
                author_id: post.getAuthorId()
            })
            return post
        } catch(e:any){
            throw new Error('Falha ao criar post')
        }
    }
}