<template>
    <div class="usuario">
        <h2>Usuário</h2>
        <hr>
        <router-view/>
        <button sucesso @click="voltarParaInicio">Voltar</button>
    </div>
</template>
<script>
export default {
  methods: {
    voltarParaInicio() {
      //   this.$router.push("/");
      //   this.$router.push({ path: "/" });
      this.$router.push({ name: "inicio" });
    },
  },
};
</script>
