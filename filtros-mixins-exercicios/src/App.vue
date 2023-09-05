<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<p>{{ cpf | cpf | inverter }}</p>
		<p>{{ usuarioMixin }}</p>
		<input type="text" :value="cpf | cpf">
		<hr>
		<Frutas />
	</div>
</template>

<script>
import frutasMixins from './frutasMixins'
import usuarioMixin from './usuarioMixin'
import Frutas from './Frutas.vue'

export default {
	components: { Frutas },
	mixins: [frutasMixins, usuarioMixin],
	filters: {
		cpf(value) {
			const arr = value.split('')
			arr.splice(3, 0, ".")
			arr.splice(7, 0, ".")
			arr.splice(11, 0, "-")
			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '11144477735'
		}
	},
	created() {
		console.log('Created - app.vue');
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
