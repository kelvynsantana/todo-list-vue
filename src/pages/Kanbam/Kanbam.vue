<template>
  <div class="container-board grid-lg">
    <div class="columns">
      <div class="column col-6">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">
              <strong class="label label-rounded label-primary">Tarefas pendentes</strong>
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
            <button v-if="uncheckeds.length > 0" class="btn btn-link float-rigth" @click="checkAll">
              <i class="icon icon-check text-success" />
            </button>
          </div>
        </div>
      </div>

      <div class="column col-6">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">
              <strong class="label label-rounded label-success">Tarefas Concluídas</strong>
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
            <button v-if="checkeds.length > 0" class="btn btn-link float-rigth" @click="uncheckAll">
              <i class="icon icon-time" />
            </button>
            <button
              v-if="checkeds.length > 0"
              class="btn btn-link float-left text-error"
              @click="removeAllCheckeds"
            >
              <i class="icon icon-delete" />
            </button>
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
    ...mapActions(['toggleTask', 'removeTask', 'checkAll', 'uncheckAll', 'removeAllCheckeds']),
  },
};
</script>

<style scoped>
.container-board {
  height: 90vh;
  padding: 10px;
  margin-top: 24px;
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
