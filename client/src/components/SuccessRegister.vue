<template>
    <div class="container text-center">
        <h1>You have successfully been registered! Have fun!</h1>
        <button class="btn btn-primary" @click="goToBeers">Check out beers</button>
        <button class="btn btn-primary" @click="goToProfile">Go to Profile</button>
    </div>
</template>

<script>
export default {
    methods: {
        goToBeers () {
            this.$router.push({
                path: '/beers'
            })
        },
        goToProfile () {
            this.$router.push({
                path: '/profile'
            })
        }
    }
}
</script>

<style>

</style>
