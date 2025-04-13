import mongoose from 'mongoose';

export interface IMemory extends mongoose.Document{
    title:string;
    date:Date;
    skills:string;
    summary:string;
}

const memorySchema:mongoose.Schema<IMemory> = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    skills:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        required:true,
    }
})

const Memory = mongoose.model('Memory',memorySchema);

export default Memory;
