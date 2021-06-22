<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list flat>
      <v-subheader>REPORTS</v-subheader>
      <v-hover>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            router
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-hover>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      items: [
        {
          text: 'All',
          icon: 'mdi-all-inclusive',
          link: '/about/all'
        },
        {
          text: 'Table',
          icon: 'mdi-table',
          link: '/about/table'
        },
        {
          text: 'Numbers',
          icon: 'mdi-numeric',
          link: '/about/numbers'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
