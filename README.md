# Full-Stack JavaScript in action.

NOTE: This app is still in beta. The ultimate goal is to clone https://www.beeradvocate.com/beer/

This application features Vue.Js on the front-end. Complete with state management using vuex. the server is built with the express.Js framework on top of Node.Js. The database used is SQLite using the Sequelize for object-relational-mapping.

## Getting Started

I've completely seperated the front-end(client) from the back-end(server) so there is an explicit seperation of concerns and the code be much easier to follow.

Clone the repository.

Open a terminal and execute:

```
1. $ cd client
2. $ npm install
3. $ npm run dev
4. Navigate to localhost:8080
```
Open another terminal and execute:

```
1. $ cd server
2. $ npm install
3. $ npm start
4. Navigate to localhost:3000
```

### Prerequisites

You must have at least version 8.9.4 of Node.js and version 5.6.0 of NPM

### TODO's

- [x] Scaffoled an express application
- [x] Scaffoled a vue front-end using vue-command-line
- [x] Added register/login authentication
- [x] Create data models for user
- [x] Create controllers for user
- [x] Create data models for beer
- [x] Create controllers for beer
- [x] Implement search feature to search through database
- [x] Create data models for to bookmark beer
- [ ] Create controllers to bookmark beer
- [ ] Create data model to view recent beer's
- [ ] Create controllers to view recent beer's
- [ ] Create controllers to bookmark beer
- [ ] Add upvote/downvote buttons and rate beers from best to worst
- [ ] Add authentication middleware to protect specific routes
- [ ] Add middleware to compress each request to the server
- [ ] Add middleware to set headers in http requests for added security


## Authors

Zak Nichols

## License

This project is licensed under the MIT License

## Final Thoughts

* I really enjoyed working with Vue. They have some of the best documentation for a framework I've ever saw. There are so many helper methods and modifiers it makes JavaScript fun. I can see why this framework is trending so much lately.
* Node.js/Express.js has always been great to me. Writing API's is straight forward and NPM provides so much great tooling.
* I went with the ORM Sequelize with SQLite instead of MongoDB because my data is relational and SQL is the king of data. The documentation for Sequelize is pretty good, but I think in the future raw SQL queries are better and faster as the app gets more data heavy.
