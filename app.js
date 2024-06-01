const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile (__dirname + '/public/index.html')
})

app.get('/About', (request, response) => {
    response.sendFile (__dirname + '/public/about.html')
})

app.get('/Works', (request, response) => {
    response.sendFile (__dirname + '/public/works.html')
})

app.listen(port) 