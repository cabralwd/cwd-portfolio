import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vueMeta from "vue-meta";
import VueGtag from "vue-gtag";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


Vue.use(vueMeta);

Vue.use(
  VueGtag,
  {
    config: { id: "G-M6957320JK" },
  },
  router
);

library.add(faLinkedin, faGithub, faBehance);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
