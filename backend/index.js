import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import connCloudinary from './config/cloudinary.js'
import userRoutes from './routes/user.route.js'
import productRoutes from './routes/product.route.js'
import cartRoutes from './routes/cart.route.js'
import orderRoutes from './routes/order.route.js'
import subscribeRoutes from './routes/subscribe.route.js'
import Subscriber from './models/subscriber.model.js'
dotenv.config()

// app configuration
const app = express()

const port = process.env.PORT || 5000

connectDB();

connCloudinary();

// middleware configuration
app.use(express.json())

app.use(cors())


// routes configuration
app.use('/api/user',userRoutes)

app.use('/api/product',productRoutes)

app.use('/api/cart',cartRoutes)

app.use('/api/order',orderRoutes);


app.use('/api/user',subscribeRoutes);

app.get('/', (req,res)=>{
    res.send('hello  api is working ')
})


app.listen(port,()=>{
    console.log("Server is running on port",port)
})

