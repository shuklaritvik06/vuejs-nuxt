<template>
  <div>I am a post page</div>
</template>

<script setup>
const route = useRoute();
definePageMeta({
  path: "/:postId(\\d+)-:postSlug",
});
</script>

<style lang="scss" scoped></style>
