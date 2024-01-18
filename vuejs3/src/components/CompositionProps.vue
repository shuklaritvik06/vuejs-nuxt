<template>
  <Person :firstName="firstName" @changeFirstName="firstName = 'Rakesh'" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Person from "./Person.vue";

export default defineComponent({
  setup() {
    const firstName = ref("Ramesh");
    return {
      firstName
    };
  },
  components: { Person }
});
</script>

<style scoped></style>
