import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = { tasks: [], loading: false };

const actions = {
  addTask({ commit }, task) {
    commit('setLoading', true);
    return new Promise(resolve => {
      setTimeout(() => {
        task.id = Date.now();
        commit('addTask', task);
        commit('setLoading', false);
        resolve(task);
      }, 500);
    });
  },
  toggleTask({ commit }, task) {
    commit('toggleTask', task);
  },
  removeTask({ commit }, task) {
    commit('removeTask', task);
  },
  checkAll({ commit, state }) {
    const uncheckedsIds = state.tasks.filter(task => !task.done).map(task => task.id);
    commit('checkAll', uncheckedsIds);
  },
  uncheckAll({ commit, state }) {
    const checkedsIds = state.tasks.filter(task => task.done).map(task => task.id);
    commit('uncheckAll', checkedsIds);
  },
  removeAllCheckeds({ commit, state }) {
    const checkedsIds = state.tasks.filter(task => task.done).map(task => task.id);
    commit('removeAllCheckeds', checkedsIds);
  },
};

const getters = {
  uncheckeds(state) {
    return state.tasks.filter(task => !task.done);
  },
  checkeds(state) {
    return state.tasks.filter(task => task.done);
  },
};

const mutations = {
  addTask(state, task) {
    state.tasks.push(task);
  },

  setLoading(state, value) {
    state.loading = value;
  },
  toggleTask(state, task) {
    const index = state.tasks.findIndex(item => item.id === task.id);
    if (index > -1) {
      const checked = !state.tasks[index].done;
      Vue.set(state.tasks, index, { ...state.tasks[index], done: checked });
    }
  },

  removeTask(state, task) {
    state.tasks = state.tasks.filter(item => item.id !== task.id);
  },
  checkAll(state, taskIds) {
    const tasks = state.tasks.map(task => {
      return taskIds.includes(task.id) ? { ...task, done: !task.done } : task;
    });
    state.tasks = tasks;
  },

  uncheckAll(state, taskIds) {
    const tasks = state.tasks.map(task => {
      return taskIds.includes(task.id) ? { ...task, done: !task.done } : task;
    });
    state.tasks = tasks;
  },
  removeAllCheckeds(state, taskIds) {
    const tasks = state.tasks.filter(task => !taskIds.includes(task.id));
    state.tasks = tasks;
  },
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});

export default store;
