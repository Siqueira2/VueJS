<template>
    <div class="usuario-detalhe">
        <h3>Usuario Detalhe</h3>
        <hr>
        <p><strong>Código:</strong>{{ id }}</p>
        <!-- <router-link tag="button" :to="`usuario/${$route.params.id}/editar`" >Editar</router-link> -->
        <!-- <router-link tag="button" :to="`usuario/${id}/editar`" >Editar</router-link> -->
        <router-link tag="button" 
        :to="{name: 'editarUsuario',
          params: {id},
          query: {completo: true, lingua: 'pt'},
          hash: '#rodape'
          }">
        Editar
      </router-link>
    </div>
</template>
<script>
export default {
  props: ["id"],

  beforeRoutEnter(to, from, next) {
    console.log("dentro do componente -> usuario detalhe");
    next();

    const auth = false;
    auth ? next() : next(false);
  },

  

  //   data() {
  //     return {
  //       id: this.$router.params.id,
  //     };
  //   },

  //   watch: {
  //     $route(to, from) {
  //       this.id = to.params.id;
  //     },
  //   },
};
</script>
