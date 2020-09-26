// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from "./router";
// import "./utils/request";
// import router from './router/lybrouter'
import Vant from 'vant';

import 'vant/lib/index.css';
Vue.use(Vant);
// axios请求的基准路径。
// axios.defaults.baseURL = "http://10.35.167.162:8080";
 axios.defaults.baseURL = "/api";

axios.interceptors.request.use(config => {
  if(localStorage.getItem("token")){
    config.headers.Authorization = 'Token ' + localStorage.getItem("token")
    }
    return config
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
