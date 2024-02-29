const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Hello = require('./models/hellos')

const app = express()

mongoose.set('strictQuery', false)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const PORT = process.env.PORT || 5000
const CONNECTION = process.env.CONNECTION

app.get("/hellos/:id", async(req,res) => {
    console.log({
        requestParams: req.params, 
        requestQuery: req.query,
    });
    try {

        const {id: helloId} = req.params
        console.log(helloId)
        const hello = await Hello.findById(helloId)
        console.log(hello)
        if(!hello){
            res.status(404).json({error: "user not found"})
        } else {
            res.json({hello})
        }
        
    } catch(err){
        res.status(500).json({error: 'something went wrong'})
    }
})

app.get("/hellos", async (req, res) => {
    // console.log(await mongoos.connection.db.listCollections().toArray())
    try {
        const result = await Hello.find()
        res.send({"hellos": result})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

app.delete("/hellos/:id", async(req,res) => {
    const helloId = req.params.id
    const result = await Hello.deleteOne({_id: helloId})
    res.json({deletedCount: result.deletedCount})
})

app.post("/hellos", (req, res) => {
   console.log(req.body)
   const hello = new Hello(req.body)
   try {
       hello.save()
       res.status(201).json({hello});
   } catch(err){
        res.status(400).json({error: err.message})
   }
});


const start = async() => {
    try {
   
        await mongoose.connect(CONNECTION);
        app.listen(PORT, () => {console.log('server started on port '+ PORT)
        
        })
    } catch(err) {
    console.log(err.message)
        
    }
}

start();

