<template>
  <ContentDoc />
  {{ url.pathname }}
  {{ url }}
  <div>Home Page</div>
  <Button buttonText="I am a Button" />
  <ProfileHeader />
  <ProfileFooter />
</template>

<script setup>
const url = useRequestURL();
const event = useRequestEvent();
const path = event?.path;
console.log(path);
</script>

<style scoped></style>
