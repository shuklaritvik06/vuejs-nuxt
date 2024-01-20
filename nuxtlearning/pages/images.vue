<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ fullName }}</div>
    <img src="@/assets/logo.svg" alt="" />
    <img src="/imageOne.jpg" alt="" />
    <img src="@/assets/imageTwo.jpg" alt="" />
  </div>
</template>

<script setup>
const { name, fullName } = useGreet();
name.value = "Ramesh";
</script>

<style lang="scss" scoped></style>
