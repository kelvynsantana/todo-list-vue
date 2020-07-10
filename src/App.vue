<template>
  <div id="app">
    <Menu class="pt-2" />
    <router-view class="container" />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Menu,
  },
};
</script>
