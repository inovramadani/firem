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
          Sponsored by Forstek
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
      <div class='subtitle'>
        here the test result:
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiOWVmNjk1OTAtZDJiMy0xMWU5LTgxMmEtNDEyNjkwNzA4MTlhIiwidWlkIjoyNDQ3OSwidXNlcm5hbWUiOiIwMDJAaXFiYWwuY29tIiwiY2hhbm5lbElkcyI6Wzg3NjEsODk0Nyw4OTQ4LDg5NDksODk1MCw4OTUxLDEzMjQ1LDEzMzE3LDEzNjI0XSwicHJpdmlsZWdlIjoxfQ.8Uo7G5_KhH5tj4MeJ4IW_qZKDbezrTviFhEv1Iw8gmo'
const calls = {}
let summaryTimeout = null

function showSummary (calls) {
  if (summaryTimeout) clearTimeout(summaryTimeout)
  summaryTimeout = setTimeout(() => {
    const callsArray = Object.keys(calls).map(key => calls[key])
    const successCalls = callsArray.filter(call => call.response != null)
    const failedCalls = callsArray.filter(call => call.response == null)
    // console.log('calls: ', calls)
    // console.log('callsArray: ', callsArray)
    const maxTime = Math.max(...successCalls.map(call => call.response.time - call.time))
    const minTime = Math.min(...successCalls.map(call => call.response.time - call.time))
    const avgTime = successCalls.reduce((acc, call) => acc + (call.response.time - call.time), 0) / successCalls.length

    console.log('maxTime: %d ms', maxTime)
    console.log('minTime: %d ms', minTime)
    console.log('avgTime: %d ms', avgTime)

    console.log('success calls: ', successCalls.length)
    console.log('failed calls: ', failedCalls.length)
    // console.log('success calls: ', successCalls.length, successCalls)
    // console.log('failed calls: ', failedCalls.length, failedCalls)
  }, 1000)
}

for (let i = 0; i < 10000; i++) {
  // console.log('call #', i+1, new Date().getTime())
  calls[i] = { time: new Date() }
  const url = 'http://localhost:8080/api/v1/presence?userId=24479'
  // const url = i % 2 === 0 ? 'http://localhost:8080/api/v1/presence?userId=24479' : 'random'
  // const url = 'https://presence-staging.voiceping.info'
  const method = 'get'
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

      showSummary(calls)

      return result
    }, 
    err => {
      const { response: error } = err
      // console.log('err: ', error)
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
  
        showSummary(calls)
      }
    })
    .catch(err => {
      console.log('err2: ', err)
    })

  
  // axios.post(
  //   `${url}/api/v1/presence`,
  //   null,
  //   { headers: { Authorization: `Bearer ${token}`}}
  // )
  //   .then(res => {
  //     console.log('res #', i+1, new Date().getTime(), res.status, res.data)
  //   })
}

// window.calls = calls

export default Vue.extend({})
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
