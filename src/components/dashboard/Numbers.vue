<template>
  <div>
    <h1>numbers</h1>
    <div class="d-flex my-3">
      <span class="pa-3">Max Series</span>
      <Chip />
    </div>
    <!-- <div class="mt-3">
      <TableDashboard />
    </div> -->
  </div>
</template>

<script>
//import TableDashboard from '@/components/dashboard/TableDashboard'
import Chip from '@/components/dashboard/Chip'
export default {
  name: 'Numbers',
  components: {
    Chip
    //TableDashboard
  }
}
</script>

<style lang="scss" scoped></style>
