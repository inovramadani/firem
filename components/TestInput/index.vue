<template>
  <div>
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
    <Button @click="$emit('start')" class='primary'>Start</Button>
    <Button @click="$emit('clear')" class='primary'>Clear</Button>
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
    onChangeAuth({ target }) {
      if (target.value === 'bearer') {
        this.isShowTokenInput = true
      } else {
        this.isShowTokenInput = false
      }
    },
    onChangeHttpMethod({ target }) {
      this.$emit('changeHttpMehod', target.value)
    },
    onChangeUrl ({ target }) {
      this.$emit('changeUrl', target.value)
    },
    onChangeToken ({ target }) {
      this.$emit('changeToken', target.value)
    },
    onChangeNbOfCalls ({ target }) {
      this.$emit('changeNbOfCalls', Number(target.value))
    }
  }
})
</script>
