<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissble v-for="msg in mensagem" :key="msg.texto">{{ msg.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="user.nome" placeholder="Digite seu nome"></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg" v-model="user.email" placeholder="Digite seu email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" variant="primary" size="lg">Salvar</b-button>
			<b-button @click="obterUsuarios" variant="sucess" size="lg" class="ml-2">Obter Usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(user, i) in users" :key="i">
				<p><strong>Nome:</strong>{{ user.nome }}</p>
				<p><strong>Email:</strong>{{ user.email }}</p>
				<p><strong>Id:</strong>{{ id }}</p>
				<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2" @click="exclui(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
  // created() {
  // 	this.$http.post('usuario.json', {
  // 		nome: 'Maria',
  // 		email: 'teste@teste.com'
  // 	}).then(res => console.log(res))
  // }

  data() {
    return {
      mensagem: [],
      users: [],
      id: null,
      user: {
        nome: "",
        email: "",
      },
    };
  },
  methods: {
    salvar() {
      const method = this.id ? "patch" : "post";
      const finalUrl = this.id ? `/${this.id}.json` : ".json";

      this.$http[method](`/users/${finalUrl}`, this.user).then(() => {
        this.limpar();
        this.obterUsuarios();
        this.mensagem.push({
          texto: "Operação realizada com sucesso!",
          tipo: "sucess",
        });
      });
    },

    carregar(id) {
      this.id = id;
      this.user = { ...this.user[id] };
    },

    excluir(id) {
      this.$http
        .delete(`/users/${id}.json`)
        .then(() => {
          this.limpar();
        })
        .catch(() => {
          this.limpar();
          this.mensagem.push({
            texto: "Problema ao excluir!",
            tipo: "danger",
          });
        });
    },

    obterUsuarios() {
      this.$http("user.json").then((res) => (this.users = res.data));
    },

    limpar() {
      this.user.nome = "";
      this.user.email = "";
      this.id = null;
      this.mensagem = [];
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
