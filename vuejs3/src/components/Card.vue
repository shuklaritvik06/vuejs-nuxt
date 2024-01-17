<template>
  <div>
    <div>
      <slot name="hey">default</slot>
    </div>
    <div>
      <slot name="hello"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card"
};
</script>

<style scoped></style>
