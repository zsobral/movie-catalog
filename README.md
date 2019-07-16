## How do you intend to approach this project? What technologies have you decided to use for each part?

I'm going to do the backend first, I'll start modeling the database then setup the authentication and lastly I'll create the endpoints for the movie catalog CRUD, then I'll start the frontend, sketching the pages first then create the stateless components and lastly I'll create the container components integrating with the backend

- Frontend: I'll use React in conjunction with emotion, react-router-dom and the React Context for the state management. Tests I'll use jest, testing-library and cypress
- Backend: I'll use Node.js with expressjs, mongoDB and a token strategy for the authentication. Tests with jest and supertest

## Do you find this to be particularly challenging in any of its requirements?

not really

## If you had a lot of time to do this, what would you do differently?

I would allow each user to create your own movie catalog, add a facebook login, allow a user to favor a catalog, a home page with the top catalogs based on views, add a cache for the top catalogs

# Movie Catalog

## server usage

inside the folder `/server` first setup the file `.env` based on `.env.example`

```
PORT=3000
MONGO_URL=mongodb://mongo/movie-catalog
JWT_PRIVATE_KEY=random_key
OMDB_API_KEY=get_a_omdb_api_key
```

to start the server use Docker Compose `docker-compose up`

to run the seeds the server must be running

```
docker-compose exec server node src/db/seeds/seed-user.js
docker-compose exec server node src/db/seeds/seed-movies.js
```

to run the tests `docker-compose run server npm test`

## web usage

### pre-requisites
  - the server must be running
  - run the server seeds

inside the folder `/web` run `npm install` then `npm start`

to edit the movies go to the page `/login` and login with the username `admin` and password `admin`

`npm test` to run the tests

![home page](https://i.imgur.com/b1u4uGW.jpg)
![logan movie page](https://i.imgur.com/QLF6s9H.jpg)