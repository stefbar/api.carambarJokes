require('dotenv').config()
const express = require('express')
// const sequelize = require('./db.js')
// const { connectDb } = require('./db.js')
// const helmet = require('helmet')
const { rateLimit } = require('express-rate-limit')
const compression = require('compression')

const swaggerUi = require('swagger-ui-express')
// const swaggerOptions = require('./swagger/options.json')
const swaggerDocs = require('./swagger/options.js')
const jokesRoutes = require('./routes/jokesRoutes')
const cors = require('cors')

const port = process.env.PORT

const app = express()

// app.disable('trust proxy')
const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	limit: 30, // Limit each IP to 30 requests per `window` (here, per minute)
	standardHeaders: true,
	legacyHeaders: false,
    message: 'Too many requests, please try again later',
    statusCode: 429,
    validate: {trustProxy: false},
})

// connectDb()

// app.use(helmet.contentSecurityPolicy({
//     useDefaults: false,
//     directives: {
//         defaultSrc: ["'self'"],
//         connectSrc: ["'self'", "api.carambarJokes/v1.0.0"],
//         // Add other directives as needed
//     }
// }))
// app.use(
//     helmet({
//         contentSecurityPolicy: false,
//     })
// )
app.use(limiter)
app.use(compression())

// app.options('*', cors(corsOptions)) // Handle pre-flight requests
const corsOptions = {
    origin: [
        'http://127.0.0.1:5501', // exact port you are serving from
        'http://localhost:3000',
        'https://stefbar.github.io/carambarFront',
        'https://api-carambarjokes.onrender.com',
        // 'https://api-carambarjokes.onrender.com/api.carambarJokes/v1.0.0/api-docs',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // credentials: true // If using cookies, set this to true
    // credentials: true, // Add this line if you need to send credentials
}

app.use(cors(corsOptions))

// app.use(cors())
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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
    // res.json({
    //     message: 'Hello Carambar Jokes API !',
    // })
})

app.listen(port, () => {
    console.log(`Carambar app listening on port ${port}`)
})
