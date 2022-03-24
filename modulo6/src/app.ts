import app from '.'
import { DogWalkController } from './controller/DogWalkController'

const dogWalkController = new DogWalkController()

app.post('/dog-walker/register', dogWalkController.registerDogWalk)