export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const result = await $fetch(`/test`, {
    baseURL: config.public.apiBase,
    headers: {
      Authorization: `Bearer ${config.apiSecret}`
    }
  });
  return result;
});
