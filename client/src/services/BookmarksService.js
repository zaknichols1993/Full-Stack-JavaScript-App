import Api from '@/services/Api'

export default {
    getBookmark (bookmark) {
        return Api().get('bookmarks', {
            params: bookmark
        })
    },
    postBookmark (bookmark) {
        return Api().post('bookmarks', bookmark)
    },
    deleteBookmark (bookmarkId) {
        return Api().delete(`bookmarks/${bookmarkId}`)
    }
}