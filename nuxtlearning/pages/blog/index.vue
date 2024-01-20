<template>
  <div>{{ route.fullpath }} {{ route.hash }}</div>
  <div>{{ route.query }}</div>
  <div>{{ data }}</div>
  <button @click="refresh">Refresh Data</button>
  <button @click="router.forward()">GO Forward</button>
  <button @click="router.back()">GO Back</button>
  <button @click="router.go(1)">GO to 1</button>
</template>

<script setup>
const { data, refresh } = await useFetch("https://jsonplaceholder.typicode.com/todos");
const route = useRoute();
const router = useRouter();
</script>

<style lang="scss" scoped></style>
