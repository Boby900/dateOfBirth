const cors = require("cors")
const express = require("express")
const PORT = 9000
const app = express()

app.use(cors())

const names = {
    "Boby Tiwari":{
        "age":20,
        "DOB":"22-09-2002",
        "stupid":false
    },
    "Prinsi Tiwari":{
        "age":16,
        "DOB":15-06-2006,
        "stupid":true
    },
    "Sheru Tiwari":{
        "age":40,
        "DOB":21-06-1990,
        "stupid":false
    },
    "unknown":{
        "age":0,
        "DOB":0,
        "stupid":true
    }
}

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get("/api/:name",(req,res)=>{
    const dateOfBirth = req.params.name
    if(names[dateOfBirth]){
        console.log(names[dateOfBirth])
        res.json(names[dateOfBirth])
    }
    else{
        console.log(names["unknown"])
        res.json(names["unknown"])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})