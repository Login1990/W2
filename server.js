const express = require("express")
const app = express()
const port = 3000

const hello = {
    msg: "Hello world"
}

let foo = {
    list : []
}

app.use(express.json())

app.use(express.static("html"))

app.use(express.urlencoded({extended: true}))

app.get("/echo/:id", (req,res) => {
    let json = {
       id : req.params.id
    }
    res.json(json)
})

app.get("/hello", (req,res) =>{
    res.json(hello)
})  

app.post("/sum", (req,res) => {
    numbers = req.body.numbers
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    res.json({"sum":sum})
})

app.post("/list", (req,res) => {
    const text = req.body.text
    foo.list.push(text)
    res.json(foo) 
})
app.listen(port, () => {
    console.log("Server is running!")
})