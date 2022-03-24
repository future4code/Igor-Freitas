import { DogWalkDatabase } from "../data/DogWalkDatabase";
import { DogWalk, DogWalkDTO } from "../model/DogWalk";
import { idGeneration } from "../services/idGenerator";
import { VerifyInfo } from "../model/verifyInfo";



export class DogWalkBusiness {
    constructor(
        private idGenerator: idGeneration,
        private dogWalkDatabase: DogWalkDatabase,
        private verifyInfo: VerifyInfo
    ) { }

    register = async (input: DogWalkDTO) => {
        const { status, date, time, pets, price, latitude, longitude, start_time, end_time } = input 
        const id = this.idGenerator.generateId()
        const newDate = this.verifyInfo.verifiyDate(input.date)

        if (!input) {
            throw new Error('Preencha todos os campos')
        }

        const dogWalk = new DogWalk(
            id,
            status,
            newDate,
            time,
            pets,
            price,
            latitude,
            longitude,
            start_time,
            end_time

        )
        await this.dogWalkDatabase.insert(dogWalk)
        return dogWalk
    }
}