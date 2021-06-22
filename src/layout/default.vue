<template>
  <div>
    <v-app-bar app color="grey lighten-1" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn class="ma-2" color="grey darken-1" dark @click="logIn">
        LogIn
        <v-icon dark right>
          mdi-login-variant
        </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: true
    }
  },
  methods: {
    logIn() {
      this.modalOpen = true
    }
  }
}
</script>

<style lang="scss" scoped></style>
