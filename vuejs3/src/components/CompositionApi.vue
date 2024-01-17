<template>
  <!-- <div>{{ firstname }}</div> -->
  <div>{{ fullName }}</div>
  <div>{{ fullName2 }}</div>
  <div>{{ count }}</div>
  <input type="text" name="" v-model="firstName" />
  <input type="text" name="" v-model="lastName" />
  <button @click="increment">+</button>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs, watch } from "vue";

export default defineComponent({
  name: "Composition",
  setup() {
    const count = ref(0);
    const state = reactive({
      firstName: "Ramesh",
      lastName: "Shukla"
    });

    watch(
      () => {
        return { ...state };
      },
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      }
    );

    watch(
      () => state.firstName,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      }
    );

    watch([count], (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    const fullName2 = computed({
      get: () => {
        return `${state.firstName} ${state.lastName}`;
      },
      set: (value: string) => {
        const names = value.split(" ");
        state.firstName = names[0];
        state.lastName = names[1];
      }
    });

    function increment() {
      count.value += 1;
    }

    const fullName = computed(() => {
      return `${state.firstName} ${state.lastName}`;
    });

    return {
      increment,
      count,
      fullName,
      ...toRefs(state),
      fullName2
    };
  }
});
</script>

<style scoped></style>
