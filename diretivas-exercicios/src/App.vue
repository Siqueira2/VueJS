<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<p v-destaque="'lightblue'">Usando diretiva destaque</p>
		<p v-destaque="cor"> Usando diretiva destaque</p>
		<p v-destaque:fundo="cor">Usando diretiva destaque</p>
		<p v-destaque.atrasar="cor">Usando diretiva destaque</p>

		<!-- <p v-teste:argumento.modificador1.mod2.mod3="valor"> Usando diretiva destaque</p> -->
		<hr>
		<p v-destaque-local="'lightblue'">Usando diretiva destaque-local</p>
		<p v-destaque-local="cor"> Usando diretiva destaque-local</p>
		<p v-destaque-local:fundo="cor">Usando diretiva destaque-local</p>
		<p v-destaque-local.atrasar="cor">Usando diretiva destaque-local</p>
		<p v-destaque-local:fundo.atrasar.alternar="cor">Usando diretiva destaque-local</p>
		<p v-destaque-local:fundo.atrasar.alternar="{ cor1: 'green', cor2: 'red', atraso: 2000, interval: 1000 }">Usando diretiva destaque-local</p>
	</div>
</template>

<script>
export default {
	directive: {
		"destaque-local": {
			bind(el, binding, vnode) {
				const alternarCor = cor => {
					if (binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}


				let atraso = 0
				if (binding.modifiers["atrasar"]) atraso = binding.value.atraso;

				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2

				let corAtual = cor1

				setTimeout(() => {
					if (binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : alternarCor(binding.value)
						}, binding.value.interval);
					}
					alternarCor(binding.value.cor1)
				}, atraso);
			},
		}
	},

	data() {
		return {
			cor: 'red'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
