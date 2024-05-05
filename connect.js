const mongoose=require("mongoose");
require('dotenv').config();


async function connectToMongoDB(){
    try{
        // console.log("checking env->",process.env.MONGODB_URI);
        await mongoose.connect("mongodb+srv://nandinisahu:nanu407@cluster0.dhndbip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        
    .then(()=>{
        console.log("connected successfully to db")
    });

    }
    catch(error){
       
        console.log(`Not connected ${error}`);
    }
}

module.exports={
    connectToMongoDB
}