const express = require('express')

const sequelize = require('./db')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT
const jokesRoutes = require('./routes/jokesRoutes')

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
