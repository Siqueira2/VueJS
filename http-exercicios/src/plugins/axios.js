import Vue from "vue";
import Axios from "axios";

// Axios.defaults.baseURL = "https://curso-vue-5e048.firebaseio.com";

// Axios.defaults.headers.common['Authorization'] = ['abcd']
// Axios.defaults.headers.get['Accepts'] = 'aplication/json'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = Axios.create({
      baseURL: "https://curso-vue-5e048.firebaseio.com",
      headers: {
        Authorization: "abcd",
      },
    });
    Vue.prototype.$http.interceptors.request.use(
      (config) => {
        console.log(config.method);

        // if (config.method == "post") config.method = "put";

        return config;
      },
      (erro) => Promise.reject(erro)
    );

    Vue.prototype.$http.interceptors.request.use(
      (res) => {
        const array = [];
        for (let chave in res.data) {
          array.push({ id: chave, ...res.data[chave] });
        }

        res.data = array;
        return res;
      },
      (erro) => Promise.reject(erro)
    );
  },
});
