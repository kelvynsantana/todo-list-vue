<template>
  <div class="container">
    <h1>Board</h1>
  </div>
</template>

<script>
export default {
  computed: {
    count: {
      set(value) {
        this.$store.commit('setCount', value);
      },
      get() {
        return this.$store.state.count;
      },
    },
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
  },
};
</script>
