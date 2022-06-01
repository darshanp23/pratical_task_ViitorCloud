const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.APP_PORT
const mongourl = process.env.MONGO_URL
const { connectAppAPIMongoDB } = require('./services/mongodb.service');

connectAppAPIMongoDB().then((res) => {

    app.get('/', (req, res) => {
        res.send('Server is up !!')
    })



    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})