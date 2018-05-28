{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
//引入vuex
{{#vuex}}
import store from './store'
{{/vuex}}

Vue.config.productionTip = false
{{#if_eq frameList "vux"}}
import FastClick from "fastclick";
import {ToastPlugin, ConfirmPlugin, AlertPlugin, LoadingPlugin} from "vux";
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(ConfirmPlugin);
Vue.use(LoadingPlugin);
//  通用样式
import "vux/src/styles/1px.less";
import "vux/src/styles/close.less";
//  通用样式  修复vux与rem适配冲突及移动端适配样式问题
import 'common/fix-vux-style-inPhone.styl'
FastClick.attach(document.body);
{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}

  {{#vuex}}
  store,
  {{/vuex}}

  {{#if_eq build "runtime"}}
  render: h => h(App){{/if_eq}}
  {{#if_eq build "standalone"}}
  components: {
    App
  },
  template: '<App/>' {{/if_eq}}
})
