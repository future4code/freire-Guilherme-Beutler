import { app } from './app'
import createUser from './endpoints/createUser';
import getAllUsers from './endpoints/getAllUsers';
import createProduct from './endpoints/createProduct';
import getAllProducts from './endpoints/getAllProducts';
import createPurchases from './endpoints/createPurchases';
import getPurchaseByUserId from './endpoints/getPurchaseByUserId'


app.post('/user', createUser)
app.post('/products', createProduct)
app.post('/purchases', createPurchases)
app.get('/users', getAllUsers)
app.get('/products', getAllProducts)
app.get("/users/:userId/purchases", getPurchaseByUserId)



