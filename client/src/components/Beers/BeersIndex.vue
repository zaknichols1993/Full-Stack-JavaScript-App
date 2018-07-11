<template>
<div class="container">
<search-beers></search-beers>
<display-beers :beers="beers"></display-beers>
</div>
</template>

<script>
import DisplayBeers from './DisplayBeers'
import SearchBeers from './SearchBeers'
import BeersService from '@/services/BeersService'

export default {
  // this component is concerned with fetching all 
  // beers in the database.
  data () {
    return {
      beers: []
    }
  },

  async mounted () {
    this.beers = (await BeersService.getAllBeers()).data
  },
  components: {
    DisplayBeers,
    SearchBeers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
