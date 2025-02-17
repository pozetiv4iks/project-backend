import express from 'express';
import mongoose from 'mongoose';
import reqRouter from './reqRouter.js';
import userRouter from './userRouter.js';

const PORT = 5000;
const DB_URL = "mongodb+srv://admin:iHgUX21fY3JhAHUh@database.1t3oj.mongodb.net/?retryWrites=true&w=majority&appName=Database";

const app = express();


app.use(express.json());
app.use('/request', reqRouter);
app.use('/user', userRouter);


async function startApp() {
    try{
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('SERVER START http://localhost:5000'));
    } catch(e)  {
        console.log(e)
    }
}


//iHgUX21fY3JhAHUh

startApp();
