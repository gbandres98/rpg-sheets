import Vue from "vue";
import App from "./App.vue";
import PrettyCheckbox from "pretty-checkbox-vue";

Vue.config.productionTip = false;
Vue.use(PrettyCheckbox);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
