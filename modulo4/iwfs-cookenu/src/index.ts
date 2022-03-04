import  app  from "./app"
import { createRecipie } from "./endpoints/createRecipes"
import { getProfile } from "./endpoints/getProfile"
import { getProfileById } from "./endpoints/getProfileById"
import { getRecipeById } from "./endpoints/getRecipeById"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"





app.post('/login', login)
app.post('/signup', signup)
app.post('/recipe', createRecipie)

app.get('/user/profile', getProfile)
app.get('/user/:id', getProfileById)
app.get('/recipe/:id', getRecipeById)




