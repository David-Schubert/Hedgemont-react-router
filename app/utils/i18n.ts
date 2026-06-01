import { type InitOptions } from "i18next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const languages = [
  { key: "cs", title: "Česky" },
  { key: "en", title: "English" },
] as const;

export const supportedLngs = languages.map((l) => l.key);

export const fallbackLng = "cs";

export const i18nConfig = {
  supportedLngs,
  fallbackLng,
  defaultNS: "common",
  lng: "cs",
  nsSeparator: "::",
  react: { useSuspense: false, bindI18n: "" },
  returnNull: false,
  returnEmptyString: false,
  returnObjects: false,
  debug: false,
} satisfies InitOptions;

export function useChangeLanguage(locale: string) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.resolvedLanguage === locale) return;
    void i18n.changeLanguage(locale);
  }, [locale, i18n]);
}
