import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vueMeta from "vue-meta";
import VueGtag from "vue-gtag";

Vue.config.productionTip = false;

Vue.use(vueMeta);

Vue.use(
  VueGtag,
  {
    config: { id: "G-M6957320JK" },
  },
  router
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
