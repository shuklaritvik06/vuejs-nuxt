<template>
  <div>
    <div>{{ count }}</div>
    <button @click="incrementCount">Plus</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCounter from "../composables/useCounter";

export default defineComponent({
  setup() {
    const { count, incrementCount } = useCounter();
    return {
      count,
      incrementCount
    };
  }
});
</script>

<style scoped></style>
