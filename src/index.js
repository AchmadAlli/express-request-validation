const express = require('express');
const validator = require('express-validator')
const router = require('./router')

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(router)

app.listen(port, ()=> console.log(`Server is running on port ${port}...`))

