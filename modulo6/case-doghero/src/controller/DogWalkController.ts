import { Request, Response } from 'express'
import { CreateWalk, Editwalk } from '../model/DogWalk'
import { DogWalkBusiness } from '../business/DogWalkBusiness'

export class DogWalkController {
    constructor(
        private dogWalkBusiness: DogWalkBusiness
    ) { }

    index = async (req: Request, res: Response) => {
    const search = req.query.search as string

    try {
        const result = await this.dogWalkBusiness.getAll(search)
    } catch (e: any) {
        res.status(400).send(e.message)
    }
}

create = async (req: Request, res: Response) => {
    const { date, latitude, longitude, pets } = req.body

    const input: CreateWalk = {
        date,
        latitude,
        longitude,
        pets
    }

    try{
        const result = await this.dogWalkBusiness.createWalk(input)

        res.send({message: 'Seu passeio foi agendado'})

    } catch(e:any){
        res.status(400).send(e.message || e.sqlMessage)
    }
}

edit = async (req:Request, res:Response) =>{
    const {id} = req.params
    const {status, price, duration, startTime, endTime} = req.body

    const input: Editwalk = {
        id,
        status,
        price,
        duration,
        startTime,
        endTime
    }

    try{
        const result = await this.dogWalkBusiness.editWalk(input)
        
        res.send({message: 'Passeio alterado'})
    } catch (e:any){
        res.status(400).send(e.message || e.sqlMessage)
    }
}
}

