<template>
  <div class="container text-center" v-if="!$store.state.isUserLoggedIn">
    <h1>Login</h1>
    <input type="email" class="form-control" placeholder="email" v-model="email">
    <br>
    <input type="password" class="form-control" placeholder="Password" v-model="password">
    <br>
    <button @click="login" class="btn btn-primary">Login</button>
    <br>
    <div class="error" v-html="error"></div>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
        email: '',
        password: '',
        error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          path: '/profile'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
