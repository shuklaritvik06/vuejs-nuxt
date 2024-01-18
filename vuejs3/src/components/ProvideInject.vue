<template>
  <div>{{ injectedValue }} {{ providedRefValue }} {{ react }}</div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const injectedValue = inject("body");
    const providedRefValue = inject("providedRef");
    const react = inject("react");
    return {
      injectedValue,
      providedRefValue,
      react
    };
  }
});
</script>

<style scoped></style>
