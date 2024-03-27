import express from "express"
import cors from "cors"


const app = express()
const port = 7500

app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("this is an AWS instance")
})



app.listen(port,()=>console.log(`AWS-instance started on port ${port}`))