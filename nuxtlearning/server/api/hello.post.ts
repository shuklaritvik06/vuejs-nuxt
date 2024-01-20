export default defineEventHandler(async (event) => {
  const path1 = getRequestPath(event);
  const path2 = event.path;
  const url = getRequestURL(event);
  const ip = getRequestIP(event);
  const headers = getRequestHeaders(event);
  //   const body = await readBody(event);
  //   const formData = await readFormData(event);
  const files = await readMultipartFormData(event);
  //   const text = await readRawBody(event);
  //   const validatedBody = await readValidatedBody(event, (data) => true);
  return {
    path1,
    path2,
    url,
    ip,
    headers,
    // body,
    // formData,
    files
    // text,
    // validatedBody
  };
});
