## How do you intend to approach this project? What technologies have you decided to use for each part?

I'm going to do the backend first, I'll start modeling the database then setup the authentication and lastly I'll create the endpoints for the movie catalog CRUD, then I'll start the frontend, sketching the pages first then create the stateless components and lastly I'll create the container components integrating with the backend

- Frontend: I'll use React in conjunction with emotion, react-router-dom and the React Context for the state management. Tests I'll use jest, testing-library and cypress
- Backend: I'll use Node.js with expressjs, mongoDB and a token strategy for the authentication. Tests with jest and supertest

## Do you find this to be particularly challenging in any of its requirements?

not really

## If you had a lot of time to do this, what would you do differently?

I would allow each user to create your own movie catalog, add a facebook login, allow a user to favor a catalog, a home page with the top catalogs based on views, add a cache for the top catalogs
