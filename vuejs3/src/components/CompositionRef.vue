<template>
  <div>
    <input type="text" ref="input" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const input = ref(null);
    onMounted(() => {
      (input.value! as HTMLInputElement).focus();
    });
    return {
      input
    };
  }
});
</script>

<style scoped></style>
