
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import Memory from './Models/schema.js';

dotenv.config({
    path: './.env'
});
const app = express();


app.use(cors());
app.use(express.json());

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}

dbConnect();

// app.post('/api/memories', async (req: Request, res: Response) => {
//     const data = req.body;
//     console.log(data);
//     const memory = new Memory(data);
//     await memory.save();
//     res.status(200).json({ message: 'Data received' });
// })


// app.get('/api/memories',async(req:Request,res:Response)=>{

//     const memories = await Memory.find();
//     res.status(200).json(memories);
// })

app.get('/', (req: Request, res: Response) => {
    console.log("Root route hit");
    res.send('Hello World');
});


console.log(process.env.PORT);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


