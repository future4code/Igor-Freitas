import {app} from './app'
import { PostController } from './controller/PostController'
import { UserController } from './controller/UserController'

const userController = new UserController()

app.post('/user/singup', userController.singnup)
app.post('/user/login', userController.login)

const postController = new PostController()

app.post('/post', postController.createPost)

