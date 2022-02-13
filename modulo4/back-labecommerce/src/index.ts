import { app } from "./app";
import createProduct from "./endpoints/CreateProduct";
import  createUser  from "./endpoints/CreateUser";
import getPurchaseByUserID from "./endpoints/GatPurchaseByUserID";
import getAllProducts from "./endpoints/GetAllProducts";
import  getAllUsers from './endpoints/GetAllUsers'
import purchase from "./endpoints/PurchaseProduct";


app.post('/users', createUser)
app.post('/products', createProduct)
app.post('/purchase', purchase)
app.get('/users', getAllUsers)
app.get('/products', getAllProducts)
app.get('/users/:userID/purchases', getPurchaseByUserID)

