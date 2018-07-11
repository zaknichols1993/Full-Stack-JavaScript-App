const {Beer} = require('../models')

module.exports = {
    async getAllBeers (req, res) {
        try {
            let beers = null
            const search = req.query.search
            if (search) {
                beers = await Beer.findAll({
                    where: {
                        $or: [
                            'brand', 'abv', 'review'
                        ].map(key => ({
                            [key]: {
                                $like: `%${search}%`
                            }
                        }))
                    }
                })
            } else {
                beers = await Beer.findAll({
                    limit: 20
                })
            }
            res.send(beers)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured fetching the beers'
            })
        }
    },
    async getBeer (req, res) {
        try  {
            const beer = await Beer.findById(req.params.beerId)
            res.send(beer)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to find beer details'
            })
        }
    },
    async createBeer (req, res) {
        try {
            const beer = await Beer.create(req.body)
            res.send(beer)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured creating a beer'
            })
        }
    },
    async saveBeer (req, res) {
        try {
            await Beer.update(req.body, {
                where: {
                    id: req.params.beerId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured editing the beer'
            })
        }
    },
    async deleteBeer (req, res) {
        try {
            const {beerId} = req.params
            const beer = await Beer.findOne({
                where: {
                    id: beerId
                }
            })
            if(!beer) {
                return res.status(403).send({
                    error: 'you do not have permission to delete this beer'
                })
            }
            await beer.destroy()
            res.send(beer)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured deleting the beer.'
            })
        }
    }  
}