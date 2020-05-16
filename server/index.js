const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser');
// const morgan = require('morgan');

// app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/')))

app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', '*');  
    res.header('Access-Control-Allow-Headers', 
               'Origin, X-Requested-With, Content-Type, Accept'); 
    next();});


app.get('/rooms/:roomID/reviews', (req, res) => {
    axios.get('http://18.220.252.131:3001/rooms/2/reviews')
        .then((response) => {
            res.send(response.data)
            res.end()
        }).catch((err) => {
            console.log(err)
            res.end()
        })
}); 

app.get('/rooms/:roomID/reviews/:phrase', (req, res) => {
    axios.get('http://18.220.252.131:3001/rooms/2/reviews/${req.params.phrase}')
        .then((response) => {
            res.send(response.data)
            res.end()
        }).catch((err) => {
            console.log(err)
            res.end()
        })
}); 

app.get('/data', (req, res) => {
    axios.get('http://18.217.34.96:3002/data')
        .then((response) => {
            res.send(response.data)
            res.end()
        }).catch((err) => {
            console.log(err)
            res.end()
        })
});

app.get('/carousel', (req, res) => {
    axios.get('http://13.57.183.102:3003/carousel')
        .then((response) => {
            res.send(response.data)
            res.end()
        }).catch((err) => {
            console.log(err)
            res.end()
        })
});

app.get('/rooms', (req, res) => {
    axios.get('http://3.101.29.123:3004/rooms')
        .then((response) => {
            res.send(response.data)
            res.end()
        }).catch((err) => {
            console.log(err)
            res.end()
        })
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))