const express = require('express'),
    app = express(),
    routes = require('./routes/index'),
    swaggerJsDoc = require('swagger-jsdoc'),
    swaggerUi = require('swagger-ui-express');

const host = '127.0.0.1';
const port = 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
);
