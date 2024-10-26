const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    define: {
      timestamps: false // don't create created_at and updated_at columns
    }
})

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

module.exports = sequelize