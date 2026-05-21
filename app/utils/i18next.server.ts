import { resolve } from "node:path";
import Backend from "i18next-fs-backend";
import { createCookie } from "react-router";
import { RemixI18Next } from "remix-i18next/server";
import { fallbackLng, i18nConfig, supportedLngs } from "~/utils/i18n";

export const i18nCookie = createCookie("i18n", {
  sameSite: "lax",
  path: "/",
});

const i18next = new RemixI18Next({
  detection: {
    supportedLanguages: supportedLngs,
    fallbackLanguage: fallbackLng,
    cookie: i18nCookie,
    order: ["cookie", "header", "searchParams"],
  },
  i18next: {
    ...i18nConfig,
    lng: "cs",
    backend: {
      loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
    },
  },
  plugins: [Backend],
});

export { i18next };
