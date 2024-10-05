require('dotenv').config()
const express = require('express')
const sequelize = require('./data/db.js')
const helmet = require('helmet')
const cors = require('cors')
const { rateLimit } = require('express-rate-limit')
const compression = require('compression')

const swaggerUi = require('swagger-ui-express')
// const swaggerOptions = require('./swagger/options.json')
const swaggerDocs = require('./swagger/options.js')
const jokesRoutes = require('./routes/jokesRoutes')

const PORT = process.env.PORT

const app = express()

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	limit: 30, // Limit each IP to 30 requests per `window` (here, per minute)
	standardHeaders: true,
	legacyHeaders: false,
    message: 'Too many requests, please try again later',
    statusCode: 429
})

app.use(helmet())
app.use(limiter)
app.use(compression())
// const corsOptions = {
//      origin: ['http://127.0.0.1:5501', 'http://localhost:3000', 'https://stefbar.github.io/carambarFront'],
//     origin: '*',
//     optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions))
app.use(cors({
    origin: ['http://127.0.0.1:5501', 'http://localhost:3000', 'https://stefbar.github.io/carambarFront'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
app.set('view engine', 'ejs')

// Testing the connection
async function testConnection() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
  }
  
  testConnection()

// sequelize.sync().then(() => {
//     console.log('Connection has been established successfully.')
// })

app.use(express.json())

app.use('/api.carambarJokes/v1.0.0', jokesRoutes)

app.use(
    "/api.carambarJokes/v1.0.0/api-docs",
    // "https://api-carambarjokes.onrender.com/api.carambarJokes/v1.0.0/api-docs",
    swaggerUi.serve,
    // swaggerUi.setup(swaggerOptions, { explorer: true })
    swaggerUi.setup(swaggerDocs, { explorer: true })
)


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log(`Carambar app listening on port ${PORT}`)
})
