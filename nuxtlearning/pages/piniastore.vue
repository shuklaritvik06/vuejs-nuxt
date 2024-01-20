<template>
  <div>{{ counter.count }}</div>
  <div>{{ counter.firstName }}</div>
  <button @click="counter.increment">Increment</button>
  <button @click="counter.setName('Ramesh')">Set Name</button>
</template>

<script setup lang="ts">
const counter = useCounterStore();
</script>

<style scoped></style>
