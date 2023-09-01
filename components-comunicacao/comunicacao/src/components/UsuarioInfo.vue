<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário: <strong>{{ inverterNome() }}</strong>
    </p>
    <p>
      A idade do usuário: <strong>{{ idade }}</strong>
    </p>
    <p>
      A idade do usuário: <strong>{{ created() }}</strong>
    </p>
    <button @click="reiniciarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    idade: Number,
    reiniciarFn: Function,
  },
  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },

    reiniciarNome() {
      this.nome = "Pedro";
      this.$emit("nomeMudou", this.nome);
    },

    created() {
      //   barramento.$on("novaIdade", (idade) => {
      //     this.idade = idade;
      //   });
      barramento.quandoIdadeMuda((idade) => {
        this.idade = idade;
      });
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
