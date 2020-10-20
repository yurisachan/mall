import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import {request} from './network/request'

Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// request({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then(value=>{
//   console.log(value);
// }).catch(err=>{
//   console.log(err);
  
// })
