<template>
  <div class="mt-10">
    <div class="">
      <Modal v-if="show" />
    </div>
  </div>
</template>

<script>
import Modal from '@/components/registraion/Modal'
export default {
  name: 'SignUp',
  data: () => ({
    show: true
  }),
  components: {
    Modal
  }
}
</script>
