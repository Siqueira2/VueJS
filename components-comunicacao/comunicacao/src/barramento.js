import Vue from "vue";

export default new Vue({
  methods: {
    alterarIdade(idade) {
      this.$emit("novaIdade", idade);
    },

    quandoIdadeMuda(callback) {
      this.$on("novaIdade", callback);
    },
  },
});
