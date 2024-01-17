<template>
  <div v-bind="$attrs">Hello {{ userName }} {{ username }}</div>
  <input type="text" v-model="name" />
  <button type="button" @click="$emit('close', name)">Close</button>
  <input
    type="text"
    name=""
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  props: {
    userName: {
      type: String,
      required: true
    },
    modelValue: String
  },
  data() {
    return { name: "" };
  },
  setup() {
    const username = inject<string>("userName");

    return {
      username
    };
  }
});
</script>

<style scoped></style>
