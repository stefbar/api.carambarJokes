
# api.carambarJokes

## version v1.0.0

A simple API to execute CRUD operations on a database full of Carambar jokes.

## Features

- Have a look on the [Carambar_Jokes_Factory](https://stefbar.github.io/carambarFront/)
- Free to use

## Tech Stack

- Node.js
- Express.js
- Sequelize
- SQLite

## API

## ➤ GET

### Retrieve all jokes from the database and sends them as a JSON response

```http
GET /api.carambarJokes/v1.0.0/jokes
```

----------

### Retrieve a joke from the database by its ID and sends it as a JSON response

```http
GET /api.carambarJokes/v1.0.0/jokes/:jokeId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jokeId` | `integer` | **Required**. The joke id |

----------

### Get a random-picked joke from the database and sends it as a JSON response

```http
GET /api.carambarJokes/v1.0.0/random-joke/:randomId
```

----------

## ➤ POST

### Add a joke to the database

```http
POST /api.carambarJokes/v1.0.0/jokes
```

----------

## ➤ PUT

### Update a joke inthe database

```http
PUT /api.carambarJokes/v1.0.0/jokes/:jokeId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jokeId` | `integer` | **Required**. The joke id |

----------

## ➤ DELETE

### Delete joke inthe database

```http
DELETE /api.carambarJokes/v1.0.0/jokes/:jokeId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jokeId` | `integer` | **Required**. The joke id |

----------

## How to use

1. Clone the repo

``` bash
git clone https://github.com/stefbar/api.carambarJokes.git
```

1. Install dependencies

``` bash
npm install
```

1. Start the dev server

``` bash
npm start
```

## License

UNLICENSED.
