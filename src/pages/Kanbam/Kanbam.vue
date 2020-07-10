<template>
  <div class="container-board grid-lg">
    <div class="columns">
      <div class="column col-6">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">
              <strong>A fazer</strong>
            </div>
          </div>

          <div class="panel-body">
            <TaskList
              v-for="task in uncheckeds"
              :task="task"
              :key="task.id"
              @toggle="toggleTask"
              @remove="removeTask"
            />
          </div>
          <div class="panel-footer">
            <!-- buttons or inputs -->
          </div>
        </div>
      </div>

      <div class="column col-6">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">
              <strong>Feito</strong>
            </div>
          </div>

          <div class="panel-body">
            <TaskList
              v-for="task in checkeds"
              :task="task"
              @toggle="toggleTask"
              @remove="removeTask"
              :key="task.id"
            />
          </div>
          <div class="panel-footer">
            <!-- buttons or inputs -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TaskList from '@/components/Tasks/TaskList.vue';

export default {
  components: {
    TaskList,
  },
  computed: {
    ...mapGetters(['uncheckeds', 'checkeds']),
  },
  methods: {
    ...mapActions(['toggleTask', 'removeTask']),
  },
};
</script>

<style scoped>
.container-board {
  height: 90vh;
  padding: 10px;
}

.columns {
  height: 100%;
}

.columns .column .panel {
  height: 100%;
  border: 0;
  border-radius: 4px;
  background-color: #eee;
}
</style>
