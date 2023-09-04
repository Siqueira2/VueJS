<template>
  <div
    class="task"
    :class="stateClass"
    @click.stop="$emit('stateTaskChange', task)"
  >
    <button class="close" @click="$emit('taskDeleted', task)">x</button>
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
};
</script>

<style scoped>
.task {
  position: relative;
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  font-weight: 300;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.done {
  background: #4caf50;
  border-left: 12px solid #0a8f08;
  text-decoration: line-through;
  color: #ddd;
}

.pending {
  background: #f44336;
  border-left: 12px solid #b73229;
}

.pending .close {
  background: #b73229;
}

.done .close {
  background: #0a8f08;
}

.close {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  border: none;
  display: flex;
  justify-content: center;
}
</style>