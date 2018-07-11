<template>
  <div class="container text-center">
    <h1>Register</h1>
    <input type="email" class="form-control" placeholder="Email" v-model="email">
    <br>
    <input type="password" class="form-control" placeholder="Password" v-model="password">
    <br>
    <button @click="register" class="btn btn-success">Register</button>
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
    async register () {
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          path: '/register-success'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
