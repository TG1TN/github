require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT

app.listen(port,()=>{
    console.log('server is running on port', port)
})