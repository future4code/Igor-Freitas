export class DogWalk {
    constructor(
        private id: string,
        private date: string,
        private latitude: string,
        private longitude: string,
        private pets: number,
    ) { }


    public getId() {
        return this.id
    }
    public getPets() {
        return this.pets
    }
    public getDate() {
        return this.date
    }
    public getLatitute() {
        return this.latitude
    }
    public getLongitute() {
        return this.longitude
    }

}

export type CreateWalk = {
    date:string,
    latitude:string,
    longitude:string
    pets:number,
}

export enum Status {
    AGENDADO = 'Agendado',
    REALIZADO = 'Realizado'
}

export enum Duration {
    HALF = '30',
    HOUR = '60',
    TO_DO = 'Aguardando '
}

export type Editwalk = {
    id:string
    status: Status,
    price:number,
    duration: Duration,
    startTime:string,
    endTime:string
}

export type WalkingResponse = {
    id:string,
    status:Status,
    date:string,
    price:number,
    duration:Duration,
    latitude:string,
    longitude:string,
    pets:number,
    start_time:string,
    end_time:string

}