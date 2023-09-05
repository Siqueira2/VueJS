<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
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
			users: [],
			user: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		salvar() {
			this.$http.post('user.json', this.user).then(res => {
				this.user.nome = ''
				this.user.email = ''
			})
		},
		obterUsuarios() {
			this.$http('user.json')
				.then(res => this.users = res.data)
		},
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
