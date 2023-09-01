<template>
  <div id="contador">
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
    <button @click="subtrair">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },

  methods: {
    adicionar() {
      this.contador++;
    },

    subtrair() {
      this.contador--;
    },
  },
};
</script>
