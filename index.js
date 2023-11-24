const express = require('express'),
    app = express(),
    routes = require('./routes/index'),
    swaggerUi = require('swagger-ui-express'),
    swaggerDocs = require('./docs/swagger'),
    Sentry = require("@sentry/node");

require('dotenv').config();


const port = process.env.PORT || 3005;

Sentry.init({
    dsn: 'https://86593007f53c9e5c9e5126aa4de566ad@o4506007956553728.ingest.sentry.io/4506268898295808',
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());

app.use('/api', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () =>
    console.log(`Server listens http://${host}:${port}`)
);
