<template>
  <div>{{ firstName }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const firstName = ref(1);
    return {
      firstName
    };
  }
});
</script>

<style scoped></style>
