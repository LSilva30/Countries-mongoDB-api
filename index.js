const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=> app.listen(5000, (req, res) => {
    console.log('Connected sucessfully to http://localhost:5000/...')
}))
.catch(err => console.log(err))

const countryRoute = require('./src/routes/countriesRoutes')
app.use(countryRoute)