const { Sequelize } = require('sequelize')
const sqlite3 = require('sqlite3').verbose()
const colors = require('colors')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: console.log(),
    define: {
      timestamps: false // don't create created_at and updated_at columns
    }
})
const connectDb = async () => {
  try {
      await sequelize.sync()
      console.log('Connection established, models synchronized successfully.'.yellow.underline.bold)
  } catch (error) {
      console.error('Unable to connect to the database:'.red.underline.bold, error)
  }
}

module.exports = { sequelize, connectDb }