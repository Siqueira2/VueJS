export default {
  computed: {
    fraseComVirgula() {
      return this.frase.replace(/\s/g, ",");
    },

    fraseComTamanhos() {
      return this.frase
        .split(" ")
        .map((char) => `${char.length}`)
        .join(" ");
    },
  },
};
