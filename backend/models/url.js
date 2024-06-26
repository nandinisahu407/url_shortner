const mongoose=require('mongoose');

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },

    redirectURL:{
        type:String,
        required:true
    },
    
    visitHistory: [{ timeStamp:{type:Number} }],
},
 {timestamps:true}
);

const URL=mongoose.model('url',urlSchema);    //URL-> model variable , url-> mongodb collection
module.exports=URL;
