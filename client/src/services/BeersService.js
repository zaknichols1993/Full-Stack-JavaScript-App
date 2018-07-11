import Api from '@/services/Api'

export default {
    getAllBeers (search) {
        return Api().get('beers', {
            params: {
                search: search
            }
        })
    },
    getBeer (beerId) {
        return Api().get(`beers/${beerId}`)
    },
    createBeer (beer) {
        return Api().post('beers', beer)
    },
    saveBeer (beer) {
        return Api().put(`beers/${beer.id}`, beer)
    },
    deleteBeer (beerId) {
        return Api().delete(`beers/${beerId}`)
    }
}