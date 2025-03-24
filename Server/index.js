import express, { response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from './config/connectDB.js'
import userRouter from './route/user.route.js'

//create a express app 
const app = express()
//enable the cors with credentials (allow sent cookies with cross origin request)
// and origin restict request that only come from the url (specifi in frontend_url)
app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
}))

app.use(express.json()) // add middleware and allow to access request body 
app.use(cookieParser()) // add middleware in cookies send by client and make cookie available
app.use(morgan()) 
app.use(helmet({
    crossOriginEmbedderPolicy : false
}))
 

const PORT = 8080 || process.env.PORT //use port 8080 and process.env.PORT is use for find another port no. if the 8080 is busy or not available 

app.get("/", (request, response)=>{
    ///server to client
    response.json({
        message : "server is running"
    })
})

app.use('/api/user', userRouter)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server is running", PORT)
    })
})
