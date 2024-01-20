<template>
  <div v-for="item in data" :key="item.id">
    {{ item.title }}
  </div>
</template>

<script setup lang="ts">
const todos = ref<
  { userId: number; id: number; title: string; completed: boolean }[] | null
>([]);
const { data, error, status } = await useFetch<
  { userId: number; id: number; title: string; completed: boolean }[]
>("/api/todos");

todos.value = data.value;
</script>

<style scoped></style>
