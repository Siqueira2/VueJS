new Vue({
  el: "#desafio",
  data: {
    classe1: "destaque",
    danger: true,
    userStyle: "",
    userStyle2: "",
    estilo1: {
      width: "100px",
      height: "100px",
      background: "red",
    },
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classe1 = this.classe1 === "destaque" ? "encolher" : "destaque";
      }, 1000);
    },
    iniciarProgresso() {},

    setDanger(e) {
      if (e.target.value === "true") this.danger = true;
      else if (e.target.value === "false") this.danger = false;
    },
  },
});
