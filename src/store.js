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
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
});

export default store;
