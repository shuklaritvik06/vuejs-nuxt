<template>
  <nav class="navbar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <router-link :to="{ name: 'Home' }"> Home Other Method </router-link>
  </nav>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px auto;
}
.router-link-active,
.router-link-exact-active {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
}
</style>
