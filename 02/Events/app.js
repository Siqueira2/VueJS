new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    showAlert() {
      alert("clicado!");
    },
    saveData(e) {
      this.valor = e.target.value;
    },
  },
});
