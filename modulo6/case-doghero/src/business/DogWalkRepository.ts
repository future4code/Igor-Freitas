import { DogWalk, DogWalkDTO} from '../model/DogWalk'

interface DogWalkRepository {
    insert(dogWalk: DogWalk):Promise<DogWalk>
}

export default DogWalkRepository
