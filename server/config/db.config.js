import {} from "dotenv/config";
import mongoose from 'mongoose';
// const connectionURL = process.env.DATABASE_URL


const  mongoConnect= async ()=>{
    
   await mongoose.connect( 'mongodb+srv://chris:chris@cluster0.k1npp.mongodb.net/gaju', {
        useNewUrlParser: true,
    })
    .then(()=>console.log('database connected successfully'))
       .catch((err)=>console.log(err))
   
}

export default mongoConnect;
