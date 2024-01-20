<template>
  <div>
    <div>{{ pending ? "Loading" : data }}</div>
  </div>
</template>

<script setup lang="ts">
const { pending, data } = await useLazyFetch("/api/todos");
</script>

<style lang="scss" scoped></style>
