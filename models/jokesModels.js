const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const JokesCategories = sequelize.define('jokesCategories', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    category: DataTypes.STRING
})

const CarambarJokes = sequelize.define('carambarJokes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    joke: DataTypes.STRING,
    answer: DataTypes.STRING,
    category_id: {type: DataTypes.INTEGER, references: {model: JokesCategories, key: 'id'}}
})

module.exports = CarambarJokes