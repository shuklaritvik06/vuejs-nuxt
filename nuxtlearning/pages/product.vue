<template>
  <div>Products</div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/products");
const products = toRaw(data.value);
console.log(products);
</script>

<style lang="scss" scoped></style>
