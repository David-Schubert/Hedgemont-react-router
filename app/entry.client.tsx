import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { HydratedRouter } from "react-router/dom";
import { getInitialNamespaces } from "remix-i18next/client";
import { i18nConfig } from "~/utils/i18n";

async function hydrate() {
  const serverDetectedLanguage = document.documentElement.lang || "cs";

  await i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
      ...i18nConfig,
      ns: getInitialNamespaces(),
      backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
      lng: serverDetectedLanguage,
      detection: {
        order: [],
        caches: [],
      },
      react: {
        useSuspense: false,
      },
    });

  i18next.on("failedLoading", (lng, ns, msg) => {
    // eslint-disable-next-line no-console
    console.error(`Failed loading translation: ${lng}/${ns}`, msg);
  });

  i18next.on("missingKey", (lng, ns, key) => {
    // eslint-disable-next-line no-console
    console.warn(`Missing translation key: ${lng}/${ns}/${key}`);
  });

  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <StrictMode>
          <HydratedRouter />
        </StrictMode>
      </I18nextProvider>
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  window.setTimeout(hydrate, 1);
}
