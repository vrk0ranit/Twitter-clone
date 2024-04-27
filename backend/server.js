import express from "express"
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectMongoDB from "./db/connectMongoDB.js"

dotenv.config()

const app = express()

app.listen(process.env.PORT, () => {
    console.log("Server is running");
    connectMongoDB();
})

app.use('/api/auth', authRoutes)