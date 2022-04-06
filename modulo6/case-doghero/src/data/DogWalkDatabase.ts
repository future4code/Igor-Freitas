import DogWalkRepository from "../business/DogWalkRepository";
import { DogWalk, Editwalk, WalkingResponse } from "../model/DogWalk";
import { BaseDatabase } from "./BaseDatabase";



export class DogWalkDatabase extends BaseDatabase {
    protected TABLE_NAME = 'DOG_WALK'

    createWalk = async (dogWalk: DogWalk): Promise<void> => {
        const addWalk = await BaseDatabase.connection(this.TABLE_NAME)
            .insert({
                id: dogWalk.getId(),
                date: dogWalk.getDate(),
                latitude: dogWalk.getLatitute(),
                longitude: dogWalk.getLongitute(),
                pets: dogWalk.getPets()
            })
    }

    editWalk = async (input: Editwalk): Promise<void> =>{
        const result = await BaseDatabase.connection(this.TABLE_NAME)
        .select()
        .where({id: input.id})
        .update({
            status: input.status,
            price: input.price,
            duration: input.duration,
            start_time: input.startTime,
            end_time: input.endTime
        })
    }

    getAllWalks = async (): Promise<WalkingResponse[]> => {
        const result = await BaseDatabase.connection(this.TABLE_NAME)
            .select()
            .orderBy('date')
        return result
    }

    getWalkById = async (id: string): Promise<WalkingResponse | undefined> => {
        const result = await BaseDatabase.connection(this.TABLE_NAME)
            .select()
            .where({ id: id })
        return result[0]
    }

    getSpecificsWalk = async (task: string):Promise<WalkingResponse[]> => {
        const result = await BaseDatabase.connection(this.TABLE_NAME)
            .select()
            .where('status', 'like', `${task}`)
            .orderBy('date')
        return result
    }
}


