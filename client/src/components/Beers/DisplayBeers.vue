<template>
  <div>
  <h1 class="text-center">Beers</h1>
  <div v-for="beer in beers" :key="beer.id">
    <div class="row">
    <div class="col-xs-6 col-md-6 spacing center-div">
        <p>{{beer.brand}}</p>
        <p>{{beer.abv}}</p>
        <p>{{beer.review}}</p>
        <router-link :to="{
              path: `/beers/${beer.id}`, 
              params: {
                beerId: beer.id
              }
            }"><button class="btn btn-primary">View Beer Details</button></router-link>
    </div>
    <img class="col-xs-6 col-md-6 img-responsive" :src="beer.imageUrl"/>
  </div>
  </div>
</div>
</template>

<script>
import BeersService from '@/services/BeersService'

export default {

  data () {
    return  {
      beers: []
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.beers = (await BeersService.getAllBeers(value)).data
      }
    }  
  }
}
</script>

<style scoped>
.spacing {
  margin-top: 35px;
}
.center-div {
  padding-top: 15px;
}
img {
  width: 130px;
  max-height: 200px;
  margin-left: 50px;
  margin-top: 60px;
}
div {
  font-size: 22px;
}
</style>
