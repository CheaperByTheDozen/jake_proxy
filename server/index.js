const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/')))

app.use(function(req, res, next) {  res.header('Access-Control-Allow-Origin', '*');  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); next();});


app.get('/rooms/:roomID/reviews', (req, res) => {
    console.log('get request for carousel')
    axios.get('http://localhost:3001/rooms/2/reviews')
        .then((response) => {
            console.log('proxy server works for reviews')
            res.send(response.data)
            res.end()
        }).catch((err) => {
            console.log(err)
            res.end()
        })
}); 

app.get('/rooms/:roomID/reviews/:phrase', (req, res) => {
    axios.get('http://localhost:3001/rooms/2/reviews/${req.params.phrase}')
        .then((response) => {
            res.send(response.data)
            res.end()
        }).catch((err) => {
            console.log(err)
            res.end()
        })
}); 

app.get('/calendar', (req, res) => {
    axios.get('http://localhost:3002/calendar')
        .then((response) => {
            res.send(response.data)
            res.end()
        }).catch((err) => {
            console.log(err)
            res.end()
        })
});

app.get('/carousel', (req, res) => {
    axios.get('http://localhost:3003/carousel')
        .then((response) => {
            res.send(response.data)
            res.end()
        }).catch((err) => {
            console.log(err)
            res.end()
        })
});

app.get('/rooms', (req, res) => {
    axios.get('http://localhost:3004/rooms')
        .then((response) => {
            res.send(response.data)
            res.end()
        }).catch((err) => {
            console.log(err)
            res.end()
        })
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))