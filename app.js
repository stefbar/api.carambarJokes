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
