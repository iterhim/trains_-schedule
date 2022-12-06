global.express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes/route');
global.Train = require('./models/train');

(async () => {

    const jsonParser = bodyParser.json()

    const urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.use(cors())

    mongoose.connect('mongodb://localhost/train_page').then(() => {
        console.log('MongoDB connected')
    })
    await routes(app, port, jsonParser, urlencodedParser)
})()
