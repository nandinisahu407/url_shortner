require('dotenv').config();

const mongoose=require("mongoose");

async function connectToMongoDB(){
    try{

        // const url=process.env.MONGODB_URI;
        // console.log("checking env url->",url);

        await mongoose.connect(process.env.MONGODB_URI)
        
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