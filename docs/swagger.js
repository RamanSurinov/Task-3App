const swaggerJsDoc = require('swagger-jsdoc');



const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'my api',
            description: 'api information',
            const: {
                name: 'asdasd',
            },
            servers: ['http://localhost:5000']
        }
    },
    // ['routes/*.js']
    apis: ['routes/*.js']
};


module.exports = swaggerJsDoc(swaggerOptions)

// const swaggerJsDoc = require('swagger-jsdoc'),
//     swaggerUi = require('swagger-ui-express');

// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'users API',
//             description: "API endpoints for users app",
//             contact: {
//                 name: "my name",
//                 email: "test@mail.com",
//                 url: " url"
//             },
//             version: '1.0.0',
//         },
//         servers: [
//             {
//                 url: `local`,
//                 description: "Local server"
//             }
//         ]
//     },
//     // looks for configuration in specified directories
//     apis: ['./routes/*.js'],
// }

// const swaggerSpec = swaggerJsDoc(options)

// function swaggerDocs(app, port) {
//     // Swagger Page
//     app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

//     // Documentation in JSON format
//     app.get('/docs.json', (req, res) => {
//         res.setHeader('Content-Type', 'application/json')
//         res.send(swaggerSpec)
//     })
// }

// module.exports = swaggerDocs