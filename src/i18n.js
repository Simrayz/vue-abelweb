import { locales } from "./locales.js";

export default {
  install: (app, options) => {
    const i18n = locales;
    app.config.globalProperties.$translate = (key) => {
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      }, i18n);
    };

    app.provide("i18n", options);
  },
};
