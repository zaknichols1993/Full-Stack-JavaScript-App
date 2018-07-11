<template>
  <input placeholder="Search For Your Favorite Beer!" class="form-control spacing" v-model="search">
</template>

<script>
import _ from 'lodash'

export default { 
    data () {
        return {
            search: ''
        }
    },
    watch: {
        search: _.debounce(async function (value) {
            const route = {
                name: 'beers'
            }
            if (this.search !== '') {
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)
        }, 700),
        '$route.query.search': {
            immediate: true,
            handler (value) {
                this.search = value
            }
        }
    }
}
</script>

<style scoped>
.spacing {
    margin-top: 30px;
}
</style>
