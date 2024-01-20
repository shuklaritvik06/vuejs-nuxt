<template>
  <div>{{ state }}</div>
  <div>{{ color }}</div>
  <div>{{ theme }}</div>
  <button @click="state++">Increase</button>
  <button @click="state--">Decrease</button>
</template>

<script setup lang="ts">
const state = useState("counter", () => 0);
const theme = useTheme();
const color = useColorData();
</script>

<style scoped></style>
