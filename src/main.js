import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueMeta from "vue-meta";

Vue.config.productionTip = false;

Vue.use(vueMeta);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
