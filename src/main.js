import { createApp } from "vue";
import App from "./App.vue";
// TODO import { locales } from "./locales.js";
import "./assets/css/tailwind.css";
// TODO import i18nPlugin from "./i18n.js";

const app = createApp(App);
// TODO app.use(i18nPlugin, locales);

app.mount("#app");
