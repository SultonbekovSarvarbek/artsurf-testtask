import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// register BootstrapVue
import BootstrapVue from "bootstrap-vue";

// css files Bootstrap and BootstrapVue
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// install BootstrapVue
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
