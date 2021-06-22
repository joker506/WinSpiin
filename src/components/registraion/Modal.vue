<template>
  <div class="modal mx-auto col-md-6 col-sm-6" justify="center">
    <div class="mx-auto">
      <div class="d-flex justify-md-center justify-space-around mb-md-5">
        <v-btn
          class="col-md-4 mr-md-3 col-4"
          large
          elevation=""
          @click="checkComponent = 'Login'"
          :class="{ active: checkComponent === 'Login' }"
          >Login</v-btn
        >
        <v-btn
          large
          class="col-md-4 mr-md-3 col-4"
          elevation=""
          @click="checkComponent = 'Registr'"
          :class="{ active: checkComponent === 'Registr' }"
          >Registr</v-btn
        >
      </div>
      <component :is="checkComponent" />
    </div>
  </div>
</template>

<script>
import Login from '@/components/registraion/Login'
import Registr from '@/components/registraion/Registr'
export default {
  name: 'Modal',
  data() {
    return {
      checkComponent: 'Login'
    }
  },
  components: {
    Login,
    Registr
  }
}
</script>

<style lang="scss" scoped>
.active {
  background: #757575 !important;
  color: #fafafa;
}
</style>
