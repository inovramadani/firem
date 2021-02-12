<template>
  <div class="summary-container">
    <h2>Total success calls : {{ totalSuccess.toLocaleString() }}</h2>
    <h2>Total failed calls : {{ totalFailed.toLocaleString() }}</h2>
    <h2>Maximum response time : {{ maxTime.toLocaleString() }} ms</h2>
    <h2>Minimum response time : {{ minTime.toLocaleString() }} ms</h2>
    <h2>Average response time : {{ avgTime.toLocaleString() }} ms</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    totalSuccess: Number,
    totalFailed: Number,
    maxTime: Number,
    minTime: Number,
    avgTime: Number
  }
})
</script>

<style scoped>
  .summary-container {
    margin-top: 40px;
  }
</style>