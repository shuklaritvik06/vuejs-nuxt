export default defineEventHandler((event) => {
  const data = { ...event };
  const queries = getQuery(event);
  //   const params = getRouterParams(event);
  console.log(data);

  return { queries };
});
