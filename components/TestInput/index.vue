<template>
  <div class="input-container">
    <select @change="onChangeAuth">
      <option value="noAuth">No auth</option>
      <option value="bearer">Bearer token</option>
    </select>
    <input 
      v-if="isShowTokenInput"
      :value="token"
      placeholder="type token here..." 
      @change="onChangeToken"
    />
    <select @change="onChangeHttpMethod" :value="httpMethod">
      <option value="get">GET</option>
      <option value="post">POST</option>
      <option value="put">PUT</option>
      <option value="patch">PATCH</option>
      <option value="delete">DELETE</option>
    </select>
    <input 
      :value="apiUrl"
      placeholder="type API URL here..." 
      @change="onChangeUrl"
    />
    <span>Number of calls:</span>
    <input
      :value="nbOfCalls"
      type="number"
      min="0"
      @change="onChangeNbOfCalls"
    />
    <button @click="$emit('start')" class='btn btn-primary'>Start</button>
    <button @click="$emit('clear')" class='btn btn-primary'>Clear</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      isShowTokenInput: false
    }
  },
  props: {
    apiUrl: String,
    token: String,
    httpMethod: String,
    nbOfCalls: Number
  },
  methods: {
    onChangeAuth({ target } : { target: any}) {
      if (target.value === 'bearer') {
        this.isShowTokenInput = true
      } else {
        this.isShowTokenInput = false
      }
    },
    onChangeHttpMethod({ target } : { target: any}) {
      this.$emit('changeHttpMehod', target.value)
    },
    onChangeUrl ({ target } : { target: any}) {
      this.$emit('changeUrl', target.value)
    },
    onChangeToken ({ target } : { target: any}) {
      this.$emit('changeToken', target.value)
    },
    onChangeNbOfCalls ({ target } : { target: any}) {
      this.$emit('changeNbOfCalls', Number(target.value))
    }
  }
})
</script>

<style scoped>
  .input-container {
    margin-top: 32px;
  }
</style>
