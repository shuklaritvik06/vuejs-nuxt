export const useGreet = () => {
  const name = ref("");
  const fullName = computed(() => `${name.value} Shukla`);
  return {
    name,
    fullName
  };
};
