import express from "express"
import authRoutes from './routes/auth.routes.js'

const app = express()

app.listen(3000, () => {
    console.log("Server is running");
})

app.use('/api/auth', authRoutes)