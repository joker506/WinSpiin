<template>
  <div class="text-left">
    <v-chip
      class="ma-2"
      v-for="(item, idx) in numbers"
      :key="idx"
      :color="item.color"
      text-color="white"
    >
      {{ item.text }}
    </v-chip>
  </div>
</template>
<script>
export default {
  name: 'Chip',
  data() {
    return {
      numbers: [
        {
          id: 0,
          color: 'red',
          text: 10
        },
        {
          id: 1,
          color: 'black',
          text: 12
        },
        {
          id: 2,
          color: 'green',
          text: 15
        },
        {
          id: 3,
          color: 'red',
          text: 10
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
