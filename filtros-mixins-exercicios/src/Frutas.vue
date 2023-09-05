<template>
    <div>
        <h1>{{ global }}</h1>
        <ul>
            <li v-for="fruta in frutas">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
import frutasMixins from './frutasMixins'
import usuarioMixin from './usuarioMixin';

export default {
    mixins: [frutasMixins, usuarioMixin],
    created() {
        console.log('Created - frutas');
    }
}
</script>