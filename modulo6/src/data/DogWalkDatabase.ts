import DogWalkRepository from "../business/DogWalkRepository";
import { DogWalk } from "../model/DogWalk";
import { BaseDatabase } from "./BaseDatabase";



export class DogWalkDatabase extends BaseDatabase implements DogWalkRepository {
    protected TABLE_NAME = 'DOG_WALK'
    insert = async (dogWalk: DogWalk) => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .insert(dogWalk)
            return dogWalk
        } catch (e: any) {
            throw new Error('Ocorreu um erro, tente novamete.')
        }
    }
}