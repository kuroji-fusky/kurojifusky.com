export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:response", (response) => {
    return (response.headers = {
      "x-powered-by": "Your Mom",
      Link: "<https://res.cloudinary.com/>; rel=dns-prefetch",
    });
  });
});
