import Vue from "vue";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import VuePaginate from 'vue-paginate';
import "@/helpers/currency";

import "@/assets/styles/main.css";

Vue.use(VuePaginate);
Vue.use(require('vue-moment'));
Vue.config.productionTip = false;

// Vue.component("Ads", () => import("@/components/Ads"));
Vue.component("Loader", () => import("@/components/Loader"));
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
