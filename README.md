# L2L-Oliver

This project's goal is to create an enterprise website and supporting framework using Node, Express, and a Postgress DB. 

Author: David Ferguson

Terms: 
ReST/REST: Representational State Transfer
CRUD: Create, Read, Update, and Delete
KNEX: is an abstraction that interactions with the DB. 
     - replaces the need for SQL queries
     - Handles seeds

Commands: 
docker-compose up: starts the docker container. This is required for the application to "work".
npm start: starts Node instance
    --> If this was within Docker, the docker would run the `npm start` command as part of `docker-compose up`.

URLs:
Localhost: http://localhost:3000/inventory
Expressjs body-parser: https://github.com/expressjs/body-parser
Knex: https://www.npmjs.com/package/knex
    Knex Migrations: http://knexjs.org/#Installation-migrations 
    Knex Seeds: http://knexjs.org/#Seeds-CLI 
ESLint: http://eslint.org/
    ESLint is a common linter that's used on most projects at Dialexa

Docker Documentation: https://docs.docker.com/ 
Edmunds API Documentation (Might be useful later): http://developer.edmunds.com/api-documentation/overview/index.html#sec-2
Buid a RESTful API w/Node & Express: https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

SEEDS:
npm run knex seed: make `NAME` <-- This is the name of the file
    - *Schema* What makes up a database table. Gets created within seed directory/migrations.
    - Makes empty file with some boiler plate code
    - *Once seeds are created in objects, run knex command to load seeds into DB*\




    npm install cors --save