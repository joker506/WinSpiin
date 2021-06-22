<template>
  <div>
    <h1>All</h1>
    <div class="">
      <div class="d-flex my-3">
        <span class="pa-3">Max Series</span>
        <Chip />
      </div>
      <TableDashboard />
    </div>
  </div>
</template>

<script>
import Chip from '@/components/dashboard/Chip'
import TableDashboard from '@/components/dashboard/TableDashboard'
export default {
  name: 'All',
  components: {
    Chip,
    TableDashboard
  }
}
</script>

<style lang="scss" scoped></style>
