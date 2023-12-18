import express from "express"
import dotenv from "dotenv"

const app = express();
app.use(express.json());

app.get("/hello" , (req,res)=>{
    res.json({
        success : true,
        message : "Hello Kashish"
    })
})

//middleware
const checkAPi = (req, res, next)=>{
    const {apiKey} = req.query;

    if(apiKey==='kashish'){
       next();
    }else{
        return res.status(401).json({
            success:false,
            message:'API key is invalid'
        })
    }
}


app.get('/api/v1/orders',checkAPi, countApicalls, async(req,res)=>{
    res.json({
        success: true,
        data:["count:", count],
        message:'successfully fetch orders'
    })
})

app.post('/api/v1/orders', checkAPi, validateParams, async(req,res)=>{
   res.json({
    success:true,
    data:{},
    message:"order is create !"
   })
})


const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log(`server runing on port ${PORT}`)
})



