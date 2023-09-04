<template>
  <div class="task_grid">
    <template v-if="tasks.length">
      <Task
        v-for="(task, i) in tasks"
        :key="i"
        :task="task"
        @taskDeleted="$emit('taskDeleted', i)"
        @stateTaskChange="$emit('stateTaskChange', i)"
      />
    </template>
    <p v-else class="no_task">Sua vida está em dia!</p>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  components: { Task },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.task_grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
}

.no_task {
  color: #aaa;
  font-size: 1.7rem;
}
</style>
