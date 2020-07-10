<template>
  <div class="container grid-xs py-2 search">
    <form @submit.prevent="handleAddTask(task)">
      <div class="input-group">
        <input
          type="text"
          class="form-input"
          v-model="task.description"
          placeholder="O que você precisa fazer?"
        />
        <button type="submit" class="btn btn-primary input-group-btn" :class="{ loading }">
          Adicionar
        </button>
      </div>
    </form>
    <div class="task-list">
      <TaskList
        v-for="task in tasks"
        :key="task.id"
        @toggle="toggleTask"
        @remove="removeTask"
        :task="task"
      />
    </div>
  </div>
</template>
<script>
import TaskList from '@/components/Tasks/TaskList.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    TaskList,
  },
  data() {
    return { task: { done: false } };
  },
  computed: {
    ...mapState(['tasks', 'loading']),
  },
  methods: {
    ...mapActions(['addTask', 'toggleTask', 'removeTask']),
    async handleAddTask(task) {
      await this.addTask(task);
      this.task = { done: false };
    },
  },
};
</script>

<style scoped>
.search {
  margin-top: 36px;
}
.task-list {
  padding-top: 2rem;
}
</style>
