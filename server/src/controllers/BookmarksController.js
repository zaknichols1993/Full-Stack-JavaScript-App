const {Bookmark} = require('../models')

module.exports = {
  async getBookmark (req, res) {
    try {
      const {beerId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          BeerId: beerId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured fetching the bookmark'
      })
    }
  }
}