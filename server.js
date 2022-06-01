const express = require('express')
const app = express()
const port = process.env.APP_PORT
const mongourl = process.env.MONGO_URL
const { connectAppAPIMongoDB } = require('./services/mongodb.service');
require('dotenv').config();

connectAppAPIMongoDB().then((res) => {

    app.get('/', (req, res) => {
        res.send('Server is up !!')
    })

    app.post('/user', (req, res) => {
        //Add user in db generate JWT
        res.send('Signup successfull')
    })

    app.post('/user/login', (req, res) => {
        //Auth user and add session, res with token and logout if already logged in
        res.send('Login successfull')
    })

    app.post('/tip/calculate', (req, res) => {
        //Tip calculation
        res.send('Data')
    })

    app.get('/tip', (req, res) => {
        //Get tip data with query params
        res.send('Data')
    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})