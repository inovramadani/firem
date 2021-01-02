<template>
  <div class="container">
    <div>
      <h1 class="title">
        firem
      </h1>
      <div class="links">
        <a
          href="https://forstek-web.now.sh"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Created by forstek
        </a>
        <a
          href="https://github.com/inovramadani/firem"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <TestInput 
        :apiUrl="apiUrl" 
        :token="token" 
        :httpMethod="httpMethod"
        :nbOfCalls="nbOfCalls"
        @changeUrl="onChangeUrl"
        @changeToken="onChangeToken"
        @changeHttpMehod="onChangeHttpMethod"
        @changeNbOfCalls="onChangeNbOfCalls"
        @start="onStart"
        @clear="onClear"
      />
      <Summary
        :totalSuccess="successCalls.length"
        :totalFailed="failedCalls.length"
        :minTime="minTime"
        :maxTime="maxTime"
        :avgTime="avgTime"
      />
      <div v-for="(call, idx) in successCalls" :key="`call.time.getTime() + ${idx}`">
        <ResponseView
          :index="idx + 1"
          :status="call.response.status"
          :callTime="call.time.getTime()"
          :data="JSON.stringify(call.response.data)"
          :responseTime="call.response.time.getTime() - call.time.getTime()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

let summaryTimeout: any = null
export default Vue.extend({
  data () {
    return {
      successCalls: [],
      failedCalls: [],
      maxTime: 0,
      minTime: 0,
      avgTime: 0,
      apiUrl: '',
      token: '',
      httpMethod: 'get',
      nbOfCalls: 0
    }
  },

  methods: {
    showSummary (calls) {
      /** commented out to see results changing, uncomment to see one update at last response */
      // if (summaryTimeout) clearTimeout(summaryTimeout)
      // summaryTimeout = setTimeout(() => {
        const callsArray = Object.keys(calls).map(key => calls[key])
        const successCalls = callsArray.filter(call => call.response != null)
        const failedCalls = callsArray.filter(call => call.response == null)
        
        this.successCalls = successCalls
        this.failedCalls = failedCalls

        const maxTime = Math.max(...successCalls.map(call => call.response.time - call.time))
        const minTime = Math.min(...successCalls.map(call => call.response.time - call.time))
        const avgTime = successCalls.reduce((acc, call) => acc + (call.response.time - call.time), 0) / successCalls.length

        this.maxTime = maxTime
        this.minTime = minTime
        this.avgTime = avgTime
      // }, 1000)
    },

    onChangeUrl (url) {
      this.apiUrl = url
    },

    onChangeToken (token) {
      this.token = token
    },

    onChangeHttpMethod (method) {
      this.httpMethod = method
    },

    onChangeNbOfCalls (amount) {
      this.nbOfCalls = amount
    },

    resetFields () {
      this.successCalls = []
      this.failedCalls = []
      this.maxTime = 0
      this.minTime = 0
      this.avgTime = 0
      this.apiUrl = ''
      this.token = ''
      this.httpMethod = 'get',
      this.nbOfCalls = 0
    },

    onClear () {
      this.resetFields()
    },

    onStart () {
      console.log('url - token: ', this.apiUrl, this.token)
      const url = this.apiUrl
      const token = this.token
      // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiOWVmNjk1OTAtZDJiMy0xMWU5LTgxMmEtNDEyNjkwNzA4MTlhIiwidWlkIjoyNDQ3OSwidXNlcm5hbWUiOiIwMDJAaXFiYWwuY29tIiwiY2hhbm5lbElkcyI6Wzg3NjEsODk0Nyw4OTQ4LDg5NDksODk1MCw4OTUxLDEzMjQ1LDEzMzE3LDEzNjI0XSwicHJpdmlsZWdlIjoxfQ.8Uo7G5_KhH5tj4MeJ4IW_qZKDbezrTviFhEv1Iw8gmo'
      const calls: any = {}
      const numberOfCalls = this.nbOfCalls

      for (let i = 0; i < numberOfCalls; i++) {
      // console.log('call #', i+1, new Date().getTime())
      calls[i] = { time: new Date() }
      // const url = 'https://presence-staging.voiceping.info/version'
      // const url = 'https://presence-staging.voiceping.info/api/v1/presence?userId=24479'
      // const url = 'http://localhost:8080/api/v1/presence?userId=24479'
      const method = this.httpMethod
      const data = { idx: i }
      const headers = { Authorization: `Bearer ${token}`}

      axios({ 
        method,
        url,
        data,
        headers
      })
        .then(res => {
          // console.log('res #', i+1, new Date().getTime(), res.status, res.data)
          const result = {
            status: res.status, 
            data: res.data,
            time: new Date()
          }

          calls[i] = { 
            ...calls[i], 
            response: result
          }

          this.showSummary(calls)

          return result
        }, 
        err => {
          const { response: error } = err
          console.log('err: ', error)
          if (error) {
            const configData = JSON.parse(error.config.data)
            if (configData && configData.idx) {
              const callIdx = configData.idx
      
              if (callIdx != null) {
                calls[callIdx] = { 
                  ...calls[callIdx], 
                  reject: {
                    status: error.status,
                    message: error.statusText
                  }
                }
              }
            }
      
            this.showSummary(calls)
          }
        })
        .catch(err => {
          console.log('err2: ', err)
        })
      }
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
