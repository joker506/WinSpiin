<template>
  <v-app>
    <!-- <Default /> -->
    <v-main class="pa-3">
      <router-view />
    </v-main>
    <!-- <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on"
              >From the bottom</v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark
                >Opening from the bottom</v-toolbar
              >
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row> -->
  </v-app>
</template>

<script>
//import Default from '../layout/default.vue'
export default {
  name: 'App',

  data: () => ({}),
  components: {
    //Default
  }
}
</script>
