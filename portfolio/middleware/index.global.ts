const rickroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

export default defineNuxtRouteMiddleware((to, from) => {
  if (from.path === "/.env" || from.path === "/amaze-me") {
    return navigateTo(rickroll, { external: true });
  }
});
