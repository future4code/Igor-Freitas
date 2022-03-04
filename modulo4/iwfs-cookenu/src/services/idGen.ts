import {v4} from 'uuid'

export class idGen {
    generate():string {
        return v4()
    }
}