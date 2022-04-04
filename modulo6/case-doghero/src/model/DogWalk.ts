export type DogWalkDTO = {
    status: Status,
    date: string
    time: Time,
    pets: number,
    price: number,
    latitude: string,
    longitude: string
    start_time: string,
    end_time: string

}

export enum Status {
    CARRIED = 'REALIZADA',
    SCHEDULED = 'AGENDADA'

}

export enum Time {
    ONE_HOUR = 60,
    HALF_HOUR = 30
}
export class DogWalk {
    constructor(
        private id: string,
        private status: Status,
        private date: string,
        private time: Time,
        private pets: number,
        private price: number,
        private latitude: string,
        private longitude: string,
        private start_time: string,
        private end_time: string

    ) {}

  
    getId() {
        return this.id
    }
    getStatus() {
        return this.status
    }
    getDate() {
        return this.date
    }
    getTime() {
        return this.time
    }
    getPets(){
        return this.pets
    }
    getPrice(){
        this.price
    }
    getLatitude(){
        this.latitude
    }
    getLongitude(){
        this.longitude
    }
    getStartTime(){
        this.start_time
    }
    getEndTime(){
        this.end_time
    }

}
