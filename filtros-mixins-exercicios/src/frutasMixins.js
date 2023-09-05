export default {
  data() {
    return {
      fruta: "",
      frutas: ["banana", "caju", "abacaxi"],
    };
  },
  methods: {
    add() {
      this.frutas.push(fruta);
      this.fruta = "";
    },
  },
};
