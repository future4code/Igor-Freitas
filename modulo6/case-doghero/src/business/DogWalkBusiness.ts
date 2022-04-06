import { DogWalkDatabase } from "../data/DogWalkDatabase";
import { VerifiyData } from "../services/VerifiyData";
import { CreateWalk, DogWalk, Duration, Editwalk, Status } from "../model/DogWalk";
import { idGeneration } from "../services/idGenerator";


export class DogWalkController {
    constructor(
        private verifyData: VerifiyData,
        private idGenerator: idGeneration,
        private dogWalkDatabase: DogWalkDatabase
    ) { }



    createWalk = async (input: CreateWalk) => {
        if (!input) {
            throw new Error('Preencha todos os campos')
        }

        if (this.verifyData.dateVerifiy(input.date) !== true) {
            throw new Error('Coloque a data no formato da sua região')
        }

        if (input.pets < 0) {
            throw new Error('Você precisa de um ou mais pets para agendar')
        }

        if (this.verifyData.longitudeLatitudeValidate(input.latitude, input.longitude) !== true) {
            throw new Error('Colque em graus o valor da longitude e altitude')
        }

        const id = this.idGenerator.generateId()

        const newDate = this.verifyData.formatDate(input.date)

        const dogWalk = new DogWalk(id, newDate, input.latitude, input.longitude, input.pets)

        const result = await this.dogWalkDatabase.createWalk(dogWalk)

    }

    editWalk = async (input: Editwalk) => {
        if (!input) {
            throw new Error('Para editar preencha todos os campos')
        }

        if (this.verifyData.WalkTimerValidate(input.startTime, input.endTime) !== true) {
            throw new Error('O tempo de inicio e fim precisam ser entre 30 ou 60 minutos')
        }

        if (input.duration !== Duration.HALF && input.duration !== Duration.HOUR) {
            throw new Error('O tempo de duração é 30 ou 60, apenas esses.')

        }
        const getWakById = await this.dogWalkDatabase.getWalkById(input.id)

        if (!getWakById) {
            throw new Error('Passeio não encontrado. Digite um ID válido')
        }

        if(input.price !== this.verifyData.totalPriceValidate(input.duration, getWakById.pets)){
            throw new Error(`Os valores aceitaveis são apenas ${this.verifyData.totalPriceValidate(input.duration, getWakById.pets )}`)
        }
        
        if(getWakById.status = Status.REALIZADO){
            throw new Error('Esse passeio já foi realizado. Alterações só podem ser feitas nos agendados')
        }
        if(getWakById.status !== Status.REALIZADO){
            throw new Error(`O passeio deve ser alterado para ${Status.REALIZADO}`)
        }

        const editWalk = await this.dogWalkDatabase.editWalk(input)
        return editWalk

    }

    getAll = async(input?: string) =>{
        let result 
        if(input?.toUpperCase() === Status.AGENDADO.toUpperCase() || input?.toUpperCase() === Status.REALIZADO.toUpperCase()){
            result = await this.dogWalkDatabase.getSpecificsWalk(input.toUpperCase())
        } else {
            result = await this.dogWalkDatabase.getAllWalks()
        }

        const dataResult = result.map((data) => {
            const date = new Date(data.date).toLocaleDateString("pt-BR")
            return ({
              id: data.id,
              status: data.status,
              date: date,
              price: data.price,
              duration: data.duration,
              latitude: data.latitude,
              longitude: data.longitude,
              pets: data.pets,
              startTime: data.start_time,
              endTime: data.end_time
            })
          })
          return dataResult 
        }
    }



