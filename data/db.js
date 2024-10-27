const { Sequelize } = require('sequelize')
const colors = require('colors')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    host: '../db.sqlite',
    define: {
      timestamps: false // don't create created_at and updated_at columns
    }
})

// Testing the connection
const connectDb = async () => {
  try {
      sequelize.sync()
      await sequelize.authenticate()
      console.log('Connection has been established successfully.'.yellow.underline.bold)
  } catch (error) {
      console.error('Unable to connect to the database:'.red.underline.bold, error)
  }
}

// connectDb()

module.exports = { sequelize, connectDb }