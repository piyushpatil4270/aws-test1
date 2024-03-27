import express from "express"
import cors from "cors"


const app = express()

const port = 5400


app.use(cors())
app.use(express.json())



app.listen(port,()=>console.log(`AWS-instance started on port ${port}`))