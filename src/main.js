// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './Global'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import ElementUI from 'element-ui'
import '../theme/index.css'
import {post,fetch,patch,put} from './util/http'
import axios from 'axios'
import store from './store/index'
import {getCookie,setCookie,delCookie} from './util/util'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

Vue.config.productionTip = false
Vue.use(Mint);
Vue.use(ElementUI);

Vue.prototype.global=global

Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$http = axios;

//cookie方法
Vue.prototype.getCookie = getCookie;
Vue.prototype.setCookie = setCookie;
Vue.prototype.delCookie = delCookie;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
