<template>
  <div>{{ firstName }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

onBeforeRouteLeave((to, from, next) => {
  console.log(to, from, next);
});
onBeforeRouteUpdate((to, from, next) => {
  console.log(to, from, next);
});
export default defineComponent({
  setup() {
    const firstName = ref(0);
    return {
      firstName
    };
  }
});
</script>

<style scoped></style>
