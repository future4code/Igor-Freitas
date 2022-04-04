import {v4, v5} from 'uuid'

export class idGeneration {
    generateId(): string {
        return v4()
    }
}