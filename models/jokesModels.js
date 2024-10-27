/**
 * @swagger
 * components:
 *   schemas:
 *     CarambarJokes:
 *       type: object
 *       required:
 *         - joke
 *         - category_id
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated id of the joke
 *         joke:
 *           type: string
 *           description: The joke or charade or question itself
 *         answer:
 *           type: string
 *           description: The solution of a joke cat "question" or "charade"
 *         category_id:
 *           type: integer
 *           description: 1 if of cat "story" or 2 if of cat "question" or 3 if of cat "charade"
 *       example:
 *         id: 1
 *         joke: Quelle est la femelle du hamster ?
 *         answer: L’Amsterdam.
 *         category_id: 2
 * 
 *     JokesCategories:
 *       type: object
 *       required:
 *         - category
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated id of the category
 *         category:
 *           type: string
 *           description: The name of the category
 */

const { sequelize } = require('../data/db')
const { DataTypes } = require('sequelize')

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