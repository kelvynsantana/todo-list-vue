<template>
  <div
    class="tile"
    :class="{
      checked: task.done,
    }"
  >
    <div class="title-icon tile-centered">
      <i class="icon icon-2x" :class="task.done ? 'icon-check' : 'icon-time'"></i>
    </div>
    <div class="tile-content">
      <p class="tile-subtitle">{{ task.description }}</p>
      <div>
        <button @click="$emit('toggle', task)" class="btn btn-link">
          <span class="icon icon-check" v-if="!task.done"></span>
          <span class="icon icon-time" v-else></span>
        </button>
        <button @click="$emit('remove', task)" class="btn btn-link">
          <span class="text-error icon icon-delete"></span>
        </button>
      </div>
    </div>
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
};
</script>

<style scoped>
.checked {
  text-decoration: line-through;
  color: #b4b4b4;
}
.tile {
  background: #fff;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 10px;
}
</style>
