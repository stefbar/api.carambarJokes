const swaggerJsdoc = require('swagger-jsdoc')

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.1.0",
        info: {
            title: "Carambar jokes API",
            version: "1.0.0",
            description:
              "Basic CRUD API { Node / Express / Sequelize / SQLite } documented with Swagger",
            contact: {
                name: "NDE",
                url: "https://nde-portfolio.vercel.app/",
                email: "stef.barucq@gmail.com",
            }
        },

        servers: [
            {
                url: "http://localhost:3000/api.carambarJokes/v1.0.0",
                description: "local API Documentation for testing"
            },
            {
                url: "https://api-carambarjokes.onrender.com/api.carambarJokes/v1.0.0",
                description: "API Documentation for production"
            }
        ],
    },
    apis: [
        "./routes/*.js", // has to be absolute path
        "./models/*.js"
    ],
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)
module.exports = swaggerDocs