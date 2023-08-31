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
    width: "0",
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classe1 = this.classe1 === "destaque" ? "encolher" : "destaque";
      }, 1000);
    },
    iniciarProgresso() {
      let valor = 0;
      const temp = setInterval(() => {
        valor += 5;
        this.width = `${valor}%`;
      }, 500);
      if (this.width === "100%") clearInterval(temp);
    },

    setDanger(e) {
      if (e.target.value === "true") this.danger = true;
      else if (e.target.value === "false") this.danger = false;
    },
  },
});
