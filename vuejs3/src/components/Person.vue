<template>
  <div>{{ firstName }} {{ firstNameComposition }}</div>
  <button @click="sendEvent">Click to give event</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["firstName"],
  setup(props: { firstName: string }, context) {
    function sendEvent() {
      context.emit("changeFirstName");
    }
    return {
      firstNameComposition: props.firstName,
      sendEvent
    };
  }
});
</script>

<style scoped></style>
