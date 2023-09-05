import Vue from "vue";
import Axios from "axios";

// Axios.defaults.baseURL = "https://curso-vue-5e048.firebaseio.com";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = Axios.create({
      baseURL: "https://curso-vue-5e048.firebaseio.com",
    });
  },
});
