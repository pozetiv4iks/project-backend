import express from 'express';
import mongoose from 'mongoose';
import reqRouter from './reqRouter.js';
import userRouter from './userRouter.js';

const PORT = process.env.PORT || 5000;

const DB_URL = process.env.DB_URL;

const app = express();


app.use(express.json());
app.use('/request', reqRouter);
app.use('/user', userRouter);


async function startApp() {
    try{
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('SERVER START'));
    } catch(e)  {
        console.log(e)
    }
}




startApp();
