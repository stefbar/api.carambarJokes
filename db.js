const { Sequelize } = require('sequelize')
const sqlite3 = require('sqlite3').verbose()
const colors = require('colors')
const { seedDatabase } = require('./data/dbSeed.js')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: console.log,
    define: {
      timestamps: false // don't create created_at and updated_at columns
    },
    hooks: {
      beforeConnect: (config) => {
        console.log('Before connecting to the database.')
      },
      afterConnect: () => {
        console.log('After connecting to the database.')
      }
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
// testConnection()
const connectDb = async () => {
  try {
      await sequelize.sync()
      await seedDatabase()
      console.log('Connection established, models synchronized successfully.'.yellow.underline.bold)
  } catch (error) {
      console.error('Unable to connect to the database:'.red.underline.bold, error)
  }
}

async function checkTables() {
  const [results] = await sequelize.query("SELECT name FROM sqlite_master WHERE type='table'")
  console.log('Tables in database:', results)
}
// checkTables()

async function checkData() {
  const [results] = await sequelize.query("SELECT COUNT(*) as count FROM CarambarJokes")
  console.log('Number of jokes:', results[0].count)
}
// checkData()

async function init() {
  await testConnection()
  await connectDb()
  await checkTables()
  await checkData()
}
init().catch(err => console.error(err))

module.exports = { sequelize, connectDb }