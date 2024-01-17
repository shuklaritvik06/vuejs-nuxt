<template>
  <div>
    <button @click="increment">Click to increase</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import counterMixin from "../mixins/counter";

export default defineComponent({
  mixins: [counterMixin],
  methods: {
    increment() {
      this.count += 1;
    }
  }
});
</script>

<style scoped></style>
