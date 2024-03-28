/*import express from "express"
import cors from "cors"


const app = express()
const port = 7500

app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("this is an AWS instance")
})



app.listen(port,()=>console.log(`AWS-instance started on port ${port}`))*/

import http from "http"

const ip='0.0.0.0'
const port = 80


const server = http.createServer((req,res)=>{
    res.statusCode= 200 
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
})


server.listen(port,ip,()=>{
    console.log(`Server started at http://${ip}:${port}`)
})