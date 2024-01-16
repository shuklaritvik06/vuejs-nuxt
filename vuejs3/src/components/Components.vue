<template>
  <div v-bind="$attrs">Hello {{ userName }} {{ username }}</div>
  <input type="text" name="" value="" v-model="name" />
  <button type="" @click="$emit('close', name)">Close</button>
  <input
    type="text"
    name=""
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
export default {
  name: "Components",
  data() {
    name: "";
  },
  props: {
    userName: {
      type: String,
      required: true
    },
    modelValue: String
  },
  inheritAttrs: false,
  inject: ["username"],
  emits: {
    close(name) {
      if (name.length === 0) {
        return false;
      }
      return true;
    }
  }
  //   emits: ["close"]
  //   props: ["userName"]
};
</script>

<style scoped></style>
