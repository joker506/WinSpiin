<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <List />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon large>mdi-account</v-icon>
        <v-text>User</v-text>
      </v-btn>

      <v-btn icon @click="logOut">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <!-- <component :is="selectedComp" /> -->
    </v-main>
  </v-app>
</template>

<script>
import List from '@/components/List.vue'
//import Numbers from '@/components/dashboard/Numbers'
export default {
  data: () => ({
    selectedComp: 'Numbers',
    drawer: false
    // group: null
  }),
  components: {
    List
    // Numbers
  },
  watch: {
    group() {
      // this.drawer = false
    }
  }
}
</script>
