export class VerifyInfo {
    pricePerPet = (time: number, pets: number) =>{
        const HourPrice = 35
        const ExtraHourPet = 20
        const HalfHour = 25
        const ExtraHalfHourPet = 15
        const pet = Number(pets)

        let result = 0

        if(time === 60 && pet > 1){
            result = HourPrice + (pet * ExtraHourPet)
        }

        if(time === 30 && pet > 1 ){
            result = HalfHour + (pet * ExtraHalfHourPet)
        }

        if(time === 60 && pet === 1) {
            result = HourPrice
        }

        if(time === 30 && pet === 1) {
            result = HalfHour
        }
        return result 
    }


    verifiyDate = (date: string) =>{
        const newDate = date.split('/')
        const formatedDate = newDate[2] + '-' + newDate[1] + '-' + newDate[0]
        return formatedDate
    }

}