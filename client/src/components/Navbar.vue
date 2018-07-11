<template>
  <div class="text-center text">
    <router-link to="/register" v-if="!$store.state.isUserLoggedIn">
        Sign Up
    </router-link>
    <router-link to="/beers">Browse Beer's</router-link>
    <router-link to="/">
        Home
    </router-link>
    <router-link to="/login" v-if="!$store.state.isUserLoggedIn">
        Login
    </router-link>
    <router-link to="/beers/create">Create Beer</router-link>
    <a href="#" v-if="$store.state.isUserLoggedIn" @click="logout">
        Logout
    </a>
  </div>
</template>

<script>
export default {
    methods: {
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                path: '/beers'
            })
        }
    }
}
</script>

<style scoped>
.text {
    text-decoration: underline black 1.5px;
    
}
</style>
