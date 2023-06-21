import dotenv from 'dotenv'
import router from './routes/routes';

import express from 'express'
import mongoose from 'mongoose'


// const cors = require('cors')
import cors from 'cors'

dotenv.config()
const mongoString = process.env.DATABASE_URL;


//mongoose.connect(mongoString);
//const database = mongoose.connection;

const app = express();

app.use(cors())
app.use(express.json());
app.use('/api', router)


//database.on('error', (error) => {
//    console.log(error)
//})






//database.once('connected', () => {
//    console.log('Database Connected');
    
    
//})

app.listen(80, () => {
    console.log(`Server Started at ${80}`)
})


const routes = require('./routes/routes')


export {express}
