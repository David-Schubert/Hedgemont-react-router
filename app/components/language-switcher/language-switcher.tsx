import { useEffect, useRef, useState } from "react";
import { useFetcher } from "react-router";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "cs", label: "Česky", flag: "/images/cz.svg" },
  { code: "en", label: "English", flag: "/images/en.svg" },
] as const;

export function LanguageSwitcher() {
  const fetcher = useFetcher();
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLng = i18n.language?.slice(0, 2) ?? "cs";

  useEffect(() => {
    LANGUAGES.forEach(({ flag }) => {
      const img = new Image();
      img.src = flag;
    });
  }, []);
  const current = LANGUAGES.find((l) => l.code === currentLng) ?? LANGUAGES[0];

  const switchLanguage = (lng: string) => {
    setIsOpen(false);
    if (lng === currentLng) return;
    void i18n.changeLanguage(lng);
    void fetcher.submit({ lng }, { method: "post", action: "/language" });
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className={`language-switcher${isOpen ? " open" : ""}`} ref={ref}>
      <button
        type="button"
        className="language-switcher-toggle"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <img src={current.flag} alt={current.label} />
        <svg className="language-switcher-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className="language-switcher-menu" role="listbox">
          {LANGUAGES.filter((lng) => lng.code !== currentLng).map((lng) => (
            <div className="language-switcher-item" key={lng.code} role="option" aria-selected={false}>
              <button type="button" onClick={() => switchLanguage(lng.code)}>
                <img src={lng.flag} alt={lng.label} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
