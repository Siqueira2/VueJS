import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("inverter", (value) => {
  return value
    .split("")
    .reverse()
    .join("");
});

Vue.mixin({
  data() {
    return {
      global: "Estou no mixin Global",
    };
  },
  created() {
    console.log("Create- Mixin Global");
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
