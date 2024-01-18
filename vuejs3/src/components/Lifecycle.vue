<template>
  <div></div>
</template>

<script lang="ts">
import {
  onBeforeMount,
  onBeforeUpdate,
  onUnmounted,
  onUpdated,
  onMounted,
  onBeforeUnmount,
  defineComponent
} from "vue";

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      console.log("Before Mount");
    });
    onMounted(() => {
      console.log("Mounted");
    });
    onBeforeUpdate(() => {
      console.log("Before Update");
    });
    onUpdated(() => {
      console.log("Updated");
    });
    onUnmounted(() => {
      console.log("Unmounted");
    });
    onBeforeUnmount(() => {
      console.log("Before UnMount");
    });
  }
});
</script>

<style scoped></style>
