export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      sayHello: (msg: string) => `Hello ${msg}`
    }
  };
});
