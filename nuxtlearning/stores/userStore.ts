export const useUserStoreVue2 = defineStore("user", {
  state() {
    return {
      username: "Ramesh",
      surname: ""
    };
  },
  getters: {
    getName: (state) => state.username
  },
  actions: {
    addSirName(value: string) {
      this.surname = value;
    }
  }
});

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const firstName = ref("");
  function increment() {
    count.value++;
  }

  function setName(value: string) {
    firstName.value = value;
  }
  return { count, increment, firstName, setName };
});
