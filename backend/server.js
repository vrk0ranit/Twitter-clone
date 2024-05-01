import express from "express"
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import usersRoutes from './routes/user.route.js'
import connectMongoDB from "./db/connectMongoDB.js"
import cookieParser from "cookie-parser"

import {v2 as cloudinary} from 'cloudinary'

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.LOUDINARY_API_SECRET,
})

const app = express()
app.use(express.json()) //to parse req.body
app.use(express.urlencoded({ extended: true})) //to parse form data(urlencoded)
app.use(cookieParser())

app.listen(process.env.PORT, () => {
    console.log("Server is running");
    connectMongoDB();
})

app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)