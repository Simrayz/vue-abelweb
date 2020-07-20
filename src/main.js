import { createApp } from "vue";
import App from "./App.vue";
import { locales } from "./locales.js";
import "./assets/css/tailwind.css";
import i18nPlugin from "./i18n.js";

const app = createApp(App);
app.use(i18nPlugin, locales);

app.mount("#app");
