<template>
<div class="text-center">
    <beer-child-data :beer="beer"></beer-child-data>
</div>
</template>

<script>
import BeersService from '@/services/BeersService'
import BeerChildData from './BeerChildData'
import DeleteBeer from './DeleteBeer'

export default {
    // This component is only concerned with
    // fetching a single beer id
    data () {
        return {
            beer: {}
        }
    },
    async mounted () {
        const beerId = this.$store.state.route.params.beerId
        this.beer = (await BeersService.getBeer(beerId)).data
    },
    components: {
        BeerChildData,
        DeleteBeer
    }
}
</script>

<style>

</style>

