<template>
  <div>
    <button type="button">{{ buttonText }}</button>
  </div>
</template>

<script setup>
const props = defineProps(["buttonText"]);
</script>

<style lang="css" scoped></style>
