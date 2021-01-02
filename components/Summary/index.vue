<template>
  <div>
    <div class='subtitle'>
      here the test result:
    </div>
    <h2>total success calls: </h2>
    <h2>{{ totalSuccess }}</h2>
    <h2>total failed calls: </h2>
    <h2>{{ totalFailed }}</h2>
    <h2>maximum response time: </h2>
    <h2>{{ maxTime }}</h2>
    <h2>minimum response time: </h2>
    <h2>{{ minTime }}</h2>
    <h2>average response time: </h2>
    <h2>{{ avgTime }}</h2>
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