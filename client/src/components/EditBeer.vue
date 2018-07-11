<template>
<div class="container">
    <h1 class="text-center">Edit Beer</h1>
    <div class="error text-center" v-if="error">{{error}}</div>
    <input class="form-control" placeholder="Brand Name" required :rules="[required]" v-model="beer.brand">
    <br>
    <input class="form-control" placeholder="Alcohol by volume (ABV)" :rules="[required]" v-model="beer.abv">
    <br>
    <input class="form-control" placeholder="Review" :rules="[required]" v-model="beer.review">
    <br>
    <input class="form-control" placeholder="Image URL" :rules="[required]" v-model="beer.imageUrl">
    <br>
    <input class="form-control" placeholder="Youtube URL" :rules="[required]" v-model="beer.youtubeId">
    <br>
    <button class="btn btn-success" @click.once="save">Edit Beer</button>
</div>
</template>

<script>
import BeersService from '@/services/BeersService'
export default {
    data () {
        return {
            beer: {
                brand: null,
                abv: null,
                review: null,
                imageUrl: null,
                youtubeId: null
            },
            error: null,
            required: (value) => !!value || 'Required'
        }
    },
    methods: {
        async save () {
            this.error = null
            const areFieldsFilledIn = Object
                .keys(this.beer)
                .every(key => !!this.beer[key])
            if (!areFieldsFilledIn) {
                this.error = 'Please Fill In Fields'
                return
            }

            const beerId = this.$store.state.route.params.beerId
            try {
                await BeersService.saveBeer(this.beer) 
                this.$router.push({
                    name: 'beer',
                    params: {
                        beerId: beerId
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async mounted () {
        try {       
            const beerId = this.$store.state.route.params.beerId
            this.beer = (await BeersService.getBeer(beerId)).data
        } catch (err) {
            console.log(err)
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>
