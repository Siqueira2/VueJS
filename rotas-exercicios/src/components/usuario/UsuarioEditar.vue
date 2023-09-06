<template>
    <div class="usuario-editar">
      <h3>Editar Usuario</h3>
      <p><strong>Código</strong>{{ id }}</p>
      <p><strong>Completo:</strong>{{ $route.query.completo ? 'sim' : 'não' }}</p>
      <p><strong>Lingua</strong>{{ $route.query.lingua }}</p>
      <hr>
      <button primario>Confirmar</button>
        <div id="rodape">
          <h3>Curso vue</h3>
        </div>
    </div>
</template>
<script>
export default {
  props: ["id"],

  data() {
    return {
      confirmou: false,
    };
  },

  beforeRouteLeave(to, from, next) {
    if (this.confirmou) {
      next();
    } else if (confirm("tem certeza?")) {
      next(false);
    }
  },
};
</script>

<style>
#rodape {
  margin-top: 1000px;
}
</style>
