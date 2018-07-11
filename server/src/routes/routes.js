const AuthController = require ('../controllers/AuthController')
const AuthControllerPolicy = require('../policies/AuthControllerPolicy')
const BeersController = require('../controllers/BeersController')
const BookmarksController = require('../controllers/BookmarksController')

module.exports = (app) => {
    app.post('/register',
        AuthControllerPolicy.register,
        AuthController.register)
    app.post('/login',
        AuthController.login)

    app.get('/beers',
        BeersController.getAllBeers)
    app.post('/beers',
        BeersController.createBeer)
    app.get('/beers/:beerId', 
        BeersController.getBeer)
    app.put('/beers/:beerId',
        BeersController.saveBeer)
    app.delete('/beers/:beerId',
        BeersController.deleteBeer)

    app.get('/bookmarks',
        BookmarksController.getBookmark)
}