import axios from 'axios'
import { response } from 'express'
import { Address } from '../types/types'

const baseUrl = 'https://viacep.com.br/ws'


export const getAdressInfo = async (cep: string):Promise<Address | null> =>{
    try{
        const result = await axios.get(`${baseUrl}/${cep}/json`)
        const addres: Address ={
            state: response.data.uf,
            city: response.data.localidade,
            neighborhood: response.data.bairro,
            street: response.data.logradouro
            
        }
        return addres
    }catch(err:any){
        console.log('Erro na requisição de buscar cep', err)
        return null
    }
    
}