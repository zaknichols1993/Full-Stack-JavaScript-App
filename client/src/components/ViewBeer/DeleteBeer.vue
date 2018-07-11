<template>
<div class="container text-center">
    <h1>Are you sure you want to delete this beer?</h1>
    <router-link :to="{path: `/beers/${beer.id}`}"><button class="btn btn-success">Hell no!</button></router-link>
    <button class="btn btn-danger" @click="destroy">Delete Beer</button>
</div>
</template>

<script>
import BeersService from '@/services/BeersService'

export default {
    data () {
        return {
            beer: {}
        }
    },
    async mounted () {
        const beerId = this.$store.state.route.params.beerId
        this.beer = (await BeersService.getBeer(beerId)).data
    },
    methods: {
        async destroy () {
            try {
                await BeersService.deleteBeer(this.beer.id)
                this.beer = null
                this.$router.push({
                    path: '/beers'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>
