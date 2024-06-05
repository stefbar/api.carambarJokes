require('dotenv').config()
const express = require('express')
// const router = require('express').Router()
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
// const swaggerOptions = require('./swagger/options')
const swaggerOptions = require('./swagger/options.json')

const sequelize = require('./db')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT
const jokesRoutes = require('./routes/jokesRoutes')

// const swaggerDocs = swaggerJsdoc(swaggerOptions)

app.use(cors({
    origin: '*'
}))
// const corsOptions = {
//     origin: 'http://127.0.0.1:5500',
//     optionsSuccessStatus: 200
// }
app.set('view engine', 'ejs')

sequelize.sync().then(() => {
    console.log('Connection has been established successfully.');
})

app.use(express.json())

app.use(
    "/api.carambarJokes/v1.0.0/api-docs",
    // "https://api-carambarjokes.onrender.com/api.carambarJokes/v1.0.0/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerOptions, { explorer: true })
    // swaggerUi.setup(swaggerDocs, { explorer: true })
)

app.use('/api.carambarJokes/v1.0.0', jokesRoutes)

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log(`Carambar app listening on port ${PORT}`)
})
