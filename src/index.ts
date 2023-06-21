import dotenv from 'dotenv'
import router from './routes/routes';

import express from 'express'
import mongoose from 'mongoose'


// const cors = require('cors')
import cors from 'cors'

dotenv.config()
const mongoString = process.env.DATABASE_URL;


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})






database.once('connected', () => {
    console.log('Database Connected');
    const app = express();

    app.use(cors())
    app.use(express.json());
    app.use('/api', router)


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
    
})


//const routes = require('./routes/routes')


export {express}
