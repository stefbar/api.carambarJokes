const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    define: {
      timestamps: false // don't create created_at and updated_at columns
    }
})

module.exports = sequelize