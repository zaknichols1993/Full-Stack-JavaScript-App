<template>
  <div>
    <div class="text-center container spacing thing">
        <router-link :to="{
            path: `/beers/${beer.id}/edit`, 
            params () {
                return {
                beerId: beer.id
                }
            }
        }"
        ><button class="btn btn-primary">Edit Beer</button>
        </router-link>
        <router-link :to="{
            path: `/beers/${beer.id}/delete`, 
            params () {
                return {
                beerId: beer.id
                }
            }
        }"
        ><button class="btn btn-danger">Delete Beer</button>
        </router-link>
        <button class="btn btn-warning"
        v-if="isUserLoggedIn && !bookmark"
        @click="setBookmark">
        Bookmark Beer</button>
        <br>
        <button class="btn btn-warning"
        v-if="isUserLoggedIn && bookmark"
        @click="unsetBookmark">
        Unbookmark Beer</button>
        <br>
        <h4 class="spacing"><strong>Brand: </strong>{{beer.brand}}</h4>
        <br>
        <h4><strong>Alcohol By Volume: </strong>{{beer.abv}}</h4>
        <br>
        <h4><strong>Review: </strong>{{beer.review}}</h4>
        <br>
        <img class="center-block spacing image-responsive" :src="beer.imageUrl" />
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
    // Meta data for the beer variable.
    props: [
        'beer'
    ],
    data () {
        return {
            bookmark: null
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    watch: {
        async beer () {
            if (!this.isUserLoggedIn) {
                return
            }
            try {
                const bookmarks = (await BookmarksService.getBookmark({
                    beerId: this.beer.id,
                    userId: this.$store.state.user.id
                })).data
                if (bookmarks.length) {
                    this.bookmark = bookmarks[0]
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    methods: {
        async setBookmark () {
            try {
                this.bookmark = (await BookmarksService.postBookmark({
                    beerId: this.beer.id
                })).data
            } catch (err) {
                console.log(err)
            }
        },
        async unsetBookmark () {
            try {
                await BookmarksService.deleteBookmark(this.bookmark.id)
                this.bookmark = null
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
.spacing {
    margin-top: 25px;
}
img {
    max-height: 250px;
}
h4 {
  font-family: 'Rammetto One', cursive;
}
</style>
