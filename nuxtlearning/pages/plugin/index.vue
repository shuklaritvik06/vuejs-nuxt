<template>
  <div>{{ $sayHello("Ramesh") }}</div>
</template>

<script setup>
const { $sayHello } = useNuxtApp();
</script>

<style lang="scss" scoped></style>
