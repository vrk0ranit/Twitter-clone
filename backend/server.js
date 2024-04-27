import express from "express"
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectMongoDB from "./db/connectMongoDB.js"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()
app.use(express.json()) //to parse req.body
app.use(express.urlencoded({ extended: true})) //to parse form data(urlencoded)
app.use(cookieParser())

app.listen(process.env.PORT, () => {
    console.log("Server is running");
    connectMongoDB();
})

app.use('/api/auth', authRoutes)