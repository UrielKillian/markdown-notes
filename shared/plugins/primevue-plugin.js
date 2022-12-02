import { defineNuxtPlugin } from "#app";
import { createVuestic } from "vuestic-ui";

export default defineNuxtPlugin((nuxtapp) => {
  nuxtapp.vueApp.use(createVuestic());
});
