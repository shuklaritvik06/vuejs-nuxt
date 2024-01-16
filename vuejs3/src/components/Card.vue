<template>
  <div>
    <div>
      <slot name="hey">default</slot>
    </div>
    <div>
      <slot name="hello" :count="hello"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped></style>
