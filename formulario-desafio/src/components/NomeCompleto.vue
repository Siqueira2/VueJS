<template>
    <p>{{ nome }} {{ sobrenome }}</p>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            required: true,
        },
        sobrenome: {
            type: String,
            required: true,
        }
    }
}
</script>

