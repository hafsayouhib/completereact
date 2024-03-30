const express = require('express')
const app = express()
var cors = require("cors");
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())


app.post('/', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen('1000')