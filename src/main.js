import Vue from 'vue'
import App from './App'

import MyHttp from './plugin/http.js';

Vue.config.productionTip = false
App.mpType = 'app'

// Vue.prototype.$get = flyHttp.get;
Vue.use(MyHttp);

const app = new Vue(App)
app.$mount()
