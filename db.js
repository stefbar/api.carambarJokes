const { Sequelize } = require('sequelize')
const sqlite3 = require('sqlite3').verbose()
const colors = require('colors')
const { seedDatabase } = require('./data/dbSeed.js')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: console.log,
    define: {
      timestamps: false // do not create created_at and updated_at columns
    }
})

async function testConnection() {
  try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.')
  } catch (error) {
      console.error('Unable to connect to the database:', error)
  }
}

const connectDb = async () => {
  try {
      await sequelize.sync()
      // await sequelize.sync({ force: true })
      console.log('Connection established, models synchronized successfully.'.yellow.underline.bold)
    } catch (error) {
      console.error('Unable to connect to the database:'.red.underline.bold, error)
    }
  }

  async function checkTables() {
  const [results] = await sequelize.query("SELECT name FROM sqlite_master WHERE type='table'")
  console.log('Tables in database:', results)
}


async function checkData() {
  const [jokesCount] = await sequelize.query("SELECT COUNT(*) as count FROM CarambarJokes")
  const [categoriesCount] = await sequelize.query("SELECT COUNT(*) as count FROM JokesCategories")
  if(jokesCount[0].count === 0 && categoriesCount[0].count === 0) {
    console.log('No jokes in database, will seed...')
    // await require('./data/dbSeed.js')()
    await seedDatabase()
    console.log('Jokes seeded successfully.')    
  }
  console.log('Number of jokes:', jokesCount[0].count)
  console.log('Number of categories:', categoriesCount[0].count)
}

async function init() {
  try {
  await testConnection()
  await connectDb()
  await checkTables()
  await checkData()
}
  catch (error) {
    console.error('An error occurred during initialization: ', error)
  }
}
init().catch(err => console.error(err))

module.exports = { sequelize, connectDb }