(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1217:function(t,e,n){"use strict";var r=n(35),o=n(22),l=n(198),c=n(40),f=n(36),h=n(80),m=n(657),v=n(196),d=n(23),_=n(199),C=n(299).f,T=n(106).f,x=n(52).f,N=n(1223).trim,O=o.Number,y=O.prototype,k="Number"==h(_(y)),S=function(t){var e,n,r,o,l,c,f,code,h=v(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=N(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+h}for(c=(l=h.slice(2)).length,f=0;f<c;f++)if((code=l.charCodeAt(f))<48||code>o)return NaN;return parseInt(l,r)}return+h};if(l("Number",!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var w,M=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof M&&(k?d((function(){y.valueOf.call(n)})):"Number"!=h(n))?m(new O(S(e)),n,M):S(e)},I=r?C(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;I.length>E;E++)f(O,w=I[E])&&!f(M,w)&&x(M,w,T(O,w));M.prototype=y,y.constructor=M,c(o,"Number",M)}},1218:function(t,e,n){var content=n(1222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("1b7833da",content,!0,{sourceMap:!1})},1219:function(t,e,n){var content=n(1226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("5bc9f9e4",content,!0,{sourceMap:!1})},1220:function(t,e,n){var content=n(1228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("7e1090cf",content,!0,{sourceMap:!1})},1221:function(t,e,n){"use strict";n(1218)},1222:function(t,e,n){(e=n(104)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.responses-container{margin-top:32px;margin-bottom:60px}',""]),t.exports=e},1223:function(t,e,n){var r=n(39),o="["+n(1224)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),f=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},1224:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},1225:function(t,e,n){"use strict";n(1219)},1226:function(t,e,n){(e=n(104)(!1)).push([t.i,".input-container[data-v-7b36e0d6]{margin-top:32px}",""]),t.exports=e},1227:function(t,e,n){"use strict";n(1220)},1228:function(t,e,n){(e=n(104)(!1)).push([t.i,".summary-container[data-v-f532e9f2]{margin-top:40px}",""]),t.exports=e},1240:function(t,e,n){"use strict";n.r(e);n(1217);var r=n(9).default.extend({data:function(){return{isShowTokenInput:!1}},props:{apiUrl:String,token:String,httpMethod:String,nbOfCalls:Number},methods:{onChangeAuth:function(t){"bearer"===t.target.value?this.isShowTokenInput=!0:this.isShowTokenInput=!1},onChangeHttpMethod:function(t){var e=t.target;this.$emit("changeHttpMehod",e.value)},onChangeUrl:function(t){var e=t.target;this.$emit("changeUrl",e.value)},onChangeToken:function(t){var e=t.target;this.$emit("changeToken",e.value)},onChangeNbOfCalls:function(t){var e=t.target;this.$emit("changeNbOfCalls",Number(e.value))}}}),o=(n(1225),n(83)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-container"},[n("select",{on:{change:t.onChangeAuth}},[n("option",{attrs:{value:"noAuth"}},[t._v("No auth")]),t._v(" "),n("option",{attrs:{value:"bearer"}},[t._v("Bearer token")])]),t._v(" "),t.isShowTokenInput?n("input",{attrs:{placeholder:"type token here..."},domProps:{value:t.token},on:{change:t.onChangeToken}}):t._e(),t._v(" "),n("select",{domProps:{value:t.httpMethod},on:{change:t.onChangeHttpMethod}},[n("option",{attrs:{value:"get"}},[t._v("GET")]),t._v(" "),n("option",{attrs:{value:"post"}},[t._v("POST")]),t._v(" "),n("option",{attrs:{value:"put"}},[t._v("PUT")]),t._v(" "),n("option",{attrs:{value:"patch"}},[t._v("PATCH")]),t._v(" "),n("option",{attrs:{value:"delete"}},[t._v("DELETE")])]),t._v(" "),n("input",{attrs:{placeholder:"type API URL here..."},domProps:{value:t.apiUrl},on:{change:t.onChangeUrl}}),t._v(" "),n("span",[t._v("Number of calls:")]),t._v(" "),n("input",{attrs:{type:"number",min:"0"},domProps:{value:t.nbOfCalls},on:{change:t.onChangeNbOfCalls}}),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$emit("start")}}},[t._v("Start")]),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$emit("clear")}}},[t._v("Clear")])])}),[],!1,null,"7b36e0d6",null);e.default=component.exports},1241:function(t,e,n){"use strict";n.r(e);n(1217);var r=n(9).default.extend({props:{totalSuccess:Number,totalFailed:Number,maxTime:Number,minTime:Number,avgTime:Number}}),o=(n(1227),n(83)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"summary-container"},[n("h2",[t._v("Total success calls : "+t._s(t.totalSuccess.toLocaleString()))]),t._v(" "),n("h2",[t._v("Total failed calls : "+t._s(t.totalFailed.toLocaleString()))]),t._v(" "),n("h2",[t._v("Maximum response time : "+t._s(t.maxTime.toLocaleString())+" ms")]),t._v(" "),n("h2",[t._v("Minimum response time : "+t._s(t.minTime.toLocaleString())+" ms")]),t._v(" "),n("h2",[t._v("Average response time : "+t._s(t.avgTime.toLocaleString())+" ms")])])}),[],!1,null,"f532e9f2",null);e.default=component.exports},1242:function(t,e,n){"use strict";n.r(e);n(1217);var r=n(9).default.extend({name:"ResponseView",props:{index:Number,status:Number,data:String,calledAt:Number,responseTime:Number}}),o=n(83),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("#")]),t._v(" "),n("span",[t._v(t._s(t.index))]),t._v(" "),n("span",[t._v(") ")]),t._v(" "),n("span",[t._v("status: ")]),t._v(" "),n("span",[t._v(t._s(t.status))]),t._v(" "),n("span",[t._v("  -  ")]),t._v(" "),n("span",[t._v("data: ")]),t._v(" "),n("span",[t._v(t._s(t.data.length>80?t.data.slice(0,80)+"...":t.data))]),t._v(" "),n("span",[t._v("  -  ")]),t._v(" "),n("span",[t._v("responseTime: ")]),t._v(" "),n("span",[t._v(t._s(t.responseTime))]),t._v(" "),n("span",[t._v("  -  ")]),t._v(" "),n("span",[t._v("calledAt: ")]),t._v(" "),n("span",[t._v(t._s(t.calledAt))])])}),[],!1,null,null,null);e.default=component.exports},1244:function(t,e,n){"use strict";n.r(e);n(139),n(68),n(297),n(140);var r=n(51),o=n(192),l=n(9),c=n(137),f=n.n(c);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=l.default.extend({data:function(){return{successCalls:[],failedCalls:[],maxTime:0,minTime:0,avgTime:0,apiUrl:"",token:"",httpMethod:"get",nbOfCalls:0}},methods:{showSummary:function(t){var e=Object.keys(t).map((function(e){return t[e]})),n=e.filter((function(t){return null!=t.response})),r=e.filter((function(t){return null==t.response}));this.successCalls=n,this.failedCalls=r;var l=Math.max.apply(Math,Object(o.a)(n.map((function(t){return t.response.time-t.time})))),c=Math.min.apply(Math,Object(o.a)(n.map((function(t){return t.response.time-t.time})))),f=n.reduce((function(t,e){return t+(e.response.time-e.time)}),0)/n.length;this.maxTime=l,this.minTime=c,this.avgTime=f},onChangeUrl:function(t){this.apiUrl=t},onChangeToken:function(t){this.token=t},onChangeHttpMethod:function(t){this.httpMethod=t},onChangeNbOfCalls:function(t){this.nbOfCalls=t},resetFields:function(){this.successCalls=[],this.failedCalls=[],this.maxTime=0,this.minTime=0,this.avgTime=0,this.apiUrl="",this.token="",this.httpMethod="get",this.nbOfCalls=0},onClear:function(){this.resetFields()},onStart:function(){var t=this;console.log("url - token: ",this.apiUrl,this.token);for(var e=this.apiUrl,n=this.token,r={},o=this.nbOfCalls,l=function(i){r[i]={time:new Date};var o=t.httpMethod,data={idx:i},l={Authorization:"Bearer ".concat(n)},c={method:o,url:e,data:data,headers:l};f()(c).then((function(e){var n={status:e.status,data:e.data,time:new Date};return r[i]=m(m({},r[i]),{},{response:n}),t.showSummary(r),n}),(function(e){var n=e.response;if(console.log("err: ",n),n){var o=JSON.parse(n.config.data);if(o&&o.idx){var l=o.idx;null!=l&&(r[l]=m(m({},r[l]),{},{reject:{status:n.status,message:n.statusText}}))}t.showSummary(r)}})).catch((function(t){console.log("err2: ",t)}))},i=0;i<o;i++)l(i)}}}),d=(n(1221),n(83)),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("h1",{staticClass:"title"},[t._v("\n      firem\n    ")]),t._v(" "),t._m(0),t._v(" "),n("TestInput",{attrs:{apiUrl:t.apiUrl,token:t.token,httpMethod:t.httpMethod,nbOfCalls:t.nbOfCalls},on:{changeUrl:t.onChangeUrl,changeToken:t.onChangeToken,changeHttpMehod:t.onChangeHttpMethod,changeNbOfCalls:t.onChangeNbOfCalls,start:t.onStart,clear:t.onClear}}),t._v(" "),n("Summary",{attrs:{totalSuccess:t.successCalls.length,totalFailed:t.failedCalls.length,minTime:t.minTime,maxTime:t.maxTime,avgTime:t.avgTime}}),t._v(" "),n("div",{staticClass:"responses-container"},t._l(t.successCalls,(function(t,e){return n("div",{key:"call.time.getTime() + "+e},[n("ResponseView",{attrs:{index:e+1,status:t.response.status,calledAt:t.time.getTime(),data:JSON.stringify(t.response.data),responseTime:t.response.time.getTime()-t.time.getTime()}})],1)})),0)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"links"},[e("a",{staticClass:"button--green",attrs:{href:"https://forstek-web.now.sh",target:"_blank",rel:"noopener noreferrer"}},[this._v("\n        Created by forstek\n      ")]),this._v(" "),e("a",{staticClass:"button--grey",attrs:{href:"https://github.com/inovramadani/firem",target:"_blank",rel:"noopener noreferrer"}},[this._v("\n        GitHub\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TestInput:n(1240).default,Summary:n(1241).default,ResponseView:n(1242).default})}}]);