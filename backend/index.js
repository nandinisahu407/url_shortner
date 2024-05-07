const express=require('express');
const {connectToMongoDB}=require('./connect');
const urlRoute=require('./routes/url');
const app=express();
const port=1000;

const cors=require("cors");


require('dotenv').config();

const URL=require('./models/url');


connectToMongoDB();

app.use(express.json())

app.use(cors(
    {
        origin:["https://linkit-frontend.vercel.app"],
        methods:["POST","GET","DELETE","PUT"],
        credentials:true
    }
));

app.use('/url',urlRoute);

app.get('/:shortId',async (req,res)=>{
    const shortId=req.params.shortId;

    const entry=await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{
            timeStamp:Date.now()
        },
    } });

    res.redirect(entry.redirectURL);
})

app.listen(port, ()=>{
    console.log(`server listening at port: ${port}`);
})

