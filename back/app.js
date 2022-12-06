const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const cors = require('cors')
const routes = require('./routes/index');

global.Train = require('./models/train');

(async () => {
    const jsonParser = bodyParser.json()

    const urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.use(cors())

    await mongoose.connect('mongodb://localhost/train_page').then(() => {
        console.log('MongoDB connected')
    })
    await routes(app, port, jsonParser, urlencodedParser)
})()
