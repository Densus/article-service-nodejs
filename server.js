// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
// import { urlencoded, json } from 'body-parser';

// create express app
const app = express();

// setup server port
const port = process.env.PORT || 5000;

// compress all responses
app.use(compression())

// parse request of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

// parse request of content-type: application/json
app.use(bodyParser.json())

// define a route root
app.get('/', (req, res) => {
    res.send("Hello world");
});

// Require article routes
const articleRoutes = require('./src/routes/article.route');

// using as middleware
app.use('/api/v1/articles', articleRoutes);

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});