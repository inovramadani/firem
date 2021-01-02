<template>
  <div>
    <span>#</span>
    <span>{{ index }}</span>
    <span>)&nbsp;</span>
    <span>status: </span>
    <span>{{ status }}</span>
    <span>  -  </span>
    <span>data: </span>
    <span>{{ data.length > 80 ? data.slice(0, 80) + '...' : data }}</span>
    <span>  -  </span>
    <span>responseTime: </span>
    <span>{{ responseTime }}</span>
    <span>  -  </span>
    <span>callTime: </span>
    <span>{{ callTime }}</span>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'ResponseView',
  props: {
    index: Number, 
    status: Number, 
    data: String, 
    callTime: Number, 
    responseTime: Number
  }
})
</script>