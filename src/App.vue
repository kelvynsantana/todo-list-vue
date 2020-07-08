<template>
  <div id="app">
    <div class="container grid-xs py-2">
      <img class="img-responsive logo" src="@/assets/logo.png" alt="logo" />
      <form @submit.prevent="handleAddTask(task)">
        <div class="input-group">
          <input
            type="text"
            class="form-input"
            v-model="task.description"
            placeholder="O que você precisa fazer?"
          />
          <button type="submit" class="btn btn-primary input-group-btn">
            Adicionar
          </button>
        </div>
      </form>
      <div class="task-list">
        <TaskList
          v-for="task in tasks"
          :key="task.id"
          @toggle="toggleTask"
          @remove="handleRemoveTask"
          :task="task"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TaskList from './components/Tasks/TaskList.vue';

export default {
  name: 'App',
  components: {
    TaskList,
  },
  data() {
    return {
      tasks: [],
      task: { done: false },
    };
  },
  methods: {
    handleAddTask(task) {
      if (task.description.length <= 0) return;
      task.id = Date.now();
      this.tasks.push(task);
      this.task = { done: false };
    },
    toggleTask(task) {
      const index = this.tasks.findIndex(item => item.id === task.id);
      if (index > -1) {
        const checked = !this.tasks[index].done;
        this.$set(this.tasks, index, { ...this.tasks[index], done: checked });
      }
    },
    handleRemoveTask(task) {
      const index = this.tasks.findIndex(item => item.id === task.id);
      this.$delete(this.tasks, index);
    },
  },
};
</script>

<style scoped>
.logo {
  max-width: 400px;
  margin: 0 auto;
}
.task-list {
  padding-top: 2rem;
}
</style>
