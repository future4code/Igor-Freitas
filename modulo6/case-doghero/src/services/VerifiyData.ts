export class VerifiyData  {
    dateVerifiy = (date: string) =>{
        const splitDate = date.split('/')
        const today = new Date().getTime()
        const tomorrow = new Date(Number(splitDate[2]), Number(splitDate[1]), Number(splitDate[0])).getTime()

        if(new Date(today) < new Date(tomorrow)) {
            return true
        }
    }

    timeValidate = (starTime:string, endTime:string) =>{
        const regex = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/
        if(regex.test(starTime) && regex.test(endTime))
        return true
    }

    dateValidate = (date:string) =>{
        const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
        if(regex.test(date)){
            return true
        }
    }

    totalPriceValidate = (duration: string, pets: number) =>{
        const pet = Number(pets)
        const priceHour = 35
        const PriceHalfHour = 25
        const extraPetHour =20
        const extraPetHalfHour = 15

        let result 

        if(duration === '60' && pet > 1){
            result = priceHour + (pet * extraPetHour)

        }
        if(duration === '30' && pet > 1) {
            result = PriceHalfHour + (pet * extraPetHalfHour)
        }

        if(duration === '60' && pet === 1){
            result = PriceHalfHour
        }

        if(duration === '30' && pet === 1){
            result = PriceHalfHour
        }
        return result
    }


    longitudeLatitudeValidate = (latitude:string, longitude:string) =>{
        const latitudeRegex = /^[+-]?(([1-8]?[0-9])(\.[0-9]{1,6})?|90(\.0{1,6})?)$/
        const longitudeRegex = /^[+-]?((([1-9]?[0-9]|1[0-7][0-9])(\.[0-9]{1,6})?)|180(\.0{1,6})?)$/
        
        if(latitudeRegex.test(latitude) && longitudeRegex){
            return true
        }
    }

    WalkTimerValidate = (startTime: string, endTime:string) =>{
       const startSplit = startTime.split(':')
       const endSplit = endTime.split(':')
       const startMin = Number(startSplit[0]) * 0 + Number(startSplit[1])
       const endMin = Number(endSplit[0]) * 0 + Number(endSplit[1])
        
       if(endMin - 30 === startMin || endMin - 60 === startMin){
           return true
       }
    }
    
    formatDate = (date:string) =>{
        const newDate = date.split('/')
        const dateValidation = newDate[2] + '-' + newDate[1] + '-' + newDate[0]
        return dateValidation
}

}
