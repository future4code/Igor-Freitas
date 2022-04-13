import { BaseDatabase } from './BaseDatabase'
import { PokemonRepository } from '../business/PokemonRepository'
import { CustomError } from '../error/CustomError'


export class PokemonDatabase extends BaseDatabase implements PokemonRepository {
    TABLE_NAME = 'PokemonDB'

    getAllPokemons = async (limit: number, offset: number) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .limit(limit)
                .offset(offset)

            if (!result) {
                return null
            }
            return result
        } catch (e) {
            throw new CustomError('Database error', 400)
        }
    }

    getPokemonsByName = async (name: string, limit: number, offset: number) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("Row", "name", "Type_1", "Type_2", "ATK", "DEF", "STA")
                .where({ name })

                if(!result){
                    return null
                }
        } catch (e){
            throw new CustomError('Database error', 400)
        }
    }
}