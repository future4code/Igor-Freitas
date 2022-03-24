import { Request, Response } from 'express'
import { DogWalkBusiness } from '../business/DogWalkBusiness'
import { DogWalkDatabase } from '../data/DogWalkDatabase'
import { DogWalkDTO } from '../model/DogWalk'
import { VerifyInfo } from '../model/verifyInfo'
import { idGeneration } from '../services/idGenerator'

export class DogWalkController {
    private dogWalkBusiness: DogWalkBusiness

    constructor() {
        this.dogWalkBusiness = new DogWalkBusiness(
            new idGeneration(),
            new DogWalkDatabase(),
            new VerifyInfo()
        )
    }
    registerDogWalk = async (req: Request, res: Response) => {

        const { status, date, time, pets, price,  latitude, longitude, start_time, end_time } = req.body

        const input: DogWalkDTO = {
            status,
            date,
            time,
            pets,
            price,
            latitude,
            longitude,
            start_time,
            end_time

        } 
        
        try {
            const result = await this.dogWalkBusiness.register(input)

        } catch (e: any) {
            throw new Error('Não foi possível completar o agendamento.')
        }
    }
}
