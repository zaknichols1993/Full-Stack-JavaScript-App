const {
    sequelize,
    Beer,
    User,
    Bookmark
} = require('../src/models')

const Promise = require('bluebird')
const beers = require('./beers.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')

sequelize.sync({force: true})
.then(async function() {
    await Promise.all(
        users.map(user => {
            User.create(user)
        })
    )

    await Promise.all(
        beers.map(beer => {
            Beer.create(beer)
        })
    )

    await Promise.all(
        bookmarks.map(bookmark => {
            Bookmark.create(bookmark)
        })
    )
})
