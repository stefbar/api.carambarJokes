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
 *           description: The solution to the joke if of category "question" or "charade"
 *         category_id:
 *           type: integer
 *           description: 1 if of category "story" or 2 if of category "question" or 3 if of category "charade"
 *       example:
 *         id: 1
 *         joke: Quelle est la femelle du hamster ?
 *         answer: L’Amsterdam.
 *         category_id: 2
 */
/**
 * @swagger
 * /api.carambarJokes/v1.0.0/jokes:
 *   get:
 *     summary: Retrieve all jokes from the database
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: The whole jokes list.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/CarambarJokes'
 *       500:
 *         description: Server error
 *
 */
const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.1.0",
      info: {
        title: "Carambar jokes API",
        version: "1.0.0",
        description:
          "Basic CRUD API { Node / Express / Sequelize / SQLite } documented with Swagger",
        contact: {
          name: "NDE",
          url: "https://nde-portfolio.vercel.app/",
          email: "stef.barucq@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
          // url: "https://api-carambarjokes.onrender.com",
          description: "My API Documentation",
        },
      ],
    },
    apis: ["../routes/*.js"],
    // apis: ["./*.js"],
  }

  module.exports = swaggerOptions