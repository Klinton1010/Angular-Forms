const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const PORT=3500;

const app=express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res)
{
    res.send("Hello from server")
    
})

app.post('/enroll',(req,res)=>{
    console.log("enroll Called")
    console.log(req.body);
    res.status(200).send({"message":"Data Received"})
})
app.listen(PORT,()=>{
    console.log("Server is listening to the port",PORT);
})