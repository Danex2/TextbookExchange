## Textbook exchange

# How to run w/o docker

1. Inside both the root folder and backend folder run `yarn` or `npm i`
2. In the backend inside the `index.js` file change `mongodb://expressdb:27017/posts` to `mongodb://localhost:27017/posts`
3. For the backend run `node index.js` and in the root folder run `yarn start` or `npm start`

# How to run with docker

1. `docker-compose up`

# Tests

coming soon
