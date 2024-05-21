const express = require('express')
// const router = require('express').Router()
// const swaggerJsdoc = require('swagger-jsdoc')
// const swaggerUi = require('swagger-ui-express')
// const swaggerDocument = require('./swagger.json')

const sequelize = require('./db')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT
const jokesRoutes = require('./routes/jokesRoutes')

// const swaggerOptions = {
//     swaggerDefinition: {
//         info: {
//             title: 'Carambar Jokes API',
//             version: '1.0.0'
//         }
//     },
//     apis: ['./app.js']
// }
// const swaggerDocs = swaggerJsdoc(swaggerOptions)

// app.use('/api-docs', swaggerUi.serve)
// router.get('/api-docs', swaggerUi.setup(swaggerDocs))

app.use(cors())
// const corsOptions = {
//     origin: 'http://127.0.0.1:5500',
//     optionsSuccessStatus: 200
// }
app.set('view engine', 'ejs')

sequelize.sync().then(() => {
    console.log('Connection has been established successfully.');
})

app.use(express.json())

app.use(jokesRoutes)

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log(`Carambar app listening on port ${PORT}`)
})
