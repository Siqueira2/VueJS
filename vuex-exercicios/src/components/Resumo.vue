<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // computed: mapGetters({ total: "valorTotal" }),
  // computed: mapGetters(['valorTotal'])
  computed: {
    ...mapGetters({ total: "valorTotal" }),
    total() {
      return this.$store.getters.valorTotal;
    },
    produtos() {
      return this.$store.state.carrinho.produtos;
    },
  },
};
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 33%;
}
</style>
