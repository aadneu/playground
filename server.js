const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())

const hellos = [
    {
        "text": "Gullgutten min :)",
        "name": "mamma",
        "date": "10/2 - 2024"
    },
    {
        "text": "Halla, så kul hjemmeside du har laget!!",
        "name": "T-man",
        "date": "5/2 - 2024"
    }
]

app.get("/hellos", (req, res) => {
    res.send({"hellos": hellos})
})

app.post("/hellos", (req, res) => {
    const newData = req.body;
    console.log("received data:", newData)
    hellos.unshift(newData)
    res.status(200).send("data received successfully")
})








// npm run dev for å starte nodemon server
app.listen(5000, () => {console.log('server started on port 5000')})

// app.get("/hellos", (req, res) => {
//     res.json(
//         {"hellos": [
//             {
//                 text:'Halla, så kul hjemmeside du har laget!!',
//                 name:'T-man',
//                 date:'5/2 - 2024',  
//             },
//             {
//                 text:'Gullgutten min :)',
//                 name:'mamma',
//                 date:'10/2 - 2024',  
//             },
//         ]
//         }
//     )
// })