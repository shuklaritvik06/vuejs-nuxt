<template>
  <div>
    <div>{{ fullName }}</div>
    <div>{{ cart.reduce((acc, curr) => (acc += curr.cost), 0) }}</div>

    <!-- If the current change in the UI has no effect on the computed property 
  the property will be static and will not be recalculated whereas the method is called every time the change occurs in the user interface -->
    <!-- Computed Property can be set using the methods -->
    <div>{{ total }}</div>
    <div v-for="item in expensive" ::key="item">{{ item.product }}</div>

    <div>
      {{ count }}
    </div>
    <button @click="count = count + 1">Inc</button>
    <button @click="count = count - 1">Dec</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Computed",
  data(): {
    firstName: string;
    lastName: string;
    cart: {
      id: number;
      product: string;
      cost: number;
    }[];
    count: number;
  } {
    return {
      firstName: "Hello",
      lastName: "Binding",
      cart: [
        { id: 1, product: "Shoes", cost: 300 },
        { id: 2, product: "Butter", cost: 200 },
        { id: 3, product: "Honey", cost: 300 }
      ],
      count: 0
    };
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value: string) {
        const names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      }
    },
    total() {
      return this.cart.reduce((acc, curr) => (acc += curr.cost), 0);
    },
    expensive() {
      return this.cart.filter((item) => item.cost > 100);
    }
  },
  //   We can add a deep: true here to watch for deeply nested object property or the array changes
  watch: {
    count: {
      handler(newVal, _oldVal) {
        if (newVal > 10) {
          alert("Hello");
        }
      },
      immediate: true
    }
  }
};
</script>

<style scoped></style>
