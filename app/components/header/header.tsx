import { useEffect, useCallback, useState } from "react";

const ACTIVE_CLASS = "active";
const LOCK_CLASS = "lock-scroll";
const LINK_SELECTOR = ".nav-item-link";
const HEADER_SMALL_CLASS = "header-small";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((v) => !v), []);

  useEffect(() => {
    const update = () => setIsSmall(window.scrollY > 0);

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [isOpen, closeMenu]);

  useEffect(() => {
    document.body.classList.toggle(LOCK_CLASS, isOpen);
    return () => document.body.classList.remove(LOCK_CLASS);
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(LINK_SELECTOR)) closeMenu();
  };

  const active = isOpen ? ACTIVE_CLASS : "";
  const headerClassName = isSmall ? HEADER_SMALL_CLASS : "";

  return (
    <header className={headerClassName}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <div className="navbar">
              <div className="navbar-logo">
                <a href="#intro" onClick={closeMenu}>
                  <picture>
                    <source
                      media="(max-width: 576px)"
                      srcSet="/images/hedgemont-logo-circle.png"
                    />
                    <img
                      src="/images/hedgemont-logo-color-black.png"
                      alt="HedgeMont Investment"
                    />
                  </picture>
                </a>
              </div>
              <button
                className={`navbar-toggle ${active}`}
                aria-label="Otevřít menu"
                aria-controls="primary-nav"
                aria-expanded={isOpen}
                type="button"
                onClick={toggleMenu}
              >
                <div className="navbar-toggle-bar"></div>
                <div className="navbar-toggle-bar"></div>
              </button>
              <nav id="primary-nav" aria-label="Hlavní navigace">
                <ul className={`nav ${active}`} onClick={handleNavClick}>
                  <li className="nav-item">
                    <a className="nav-item-link" href="#partneri">
                      Partneři
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-item-link" href="#nase-hodnoty">
                      Naše hodnoty
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-item-link" href="#sluzby">
                      Služby
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-item-link" href="#prubeh-spoluprace">
                      Průběh spolupráce
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-item-link" href="#kontakt">
                      Kontakt
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-item-link"
                       target="_blank"
                       rel="noopener noreferrer"
                       href="https://identity.asora.com/account/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26client_id%3Dargeau.portal%26state%3DOVNjT2ZWNUN3dTB6M2FKTGRYQnZDaG1RWjRNdTJIdFVWejZGcEpPUTdDZ35X;%25252F%26redirect_uri%3Dhttps%253A%252F%252Fapp.asora.com%26scope%3Dopenid%2520profile%2520email%2520offline_access%2520tenantId%2520portal-api%2520role%2520IdentityServerApi%26code_challenge%3DKyj8-FjL7YyK3MjYFQyTH4W74bV8B8pSLChXi0NuKwM%26code_challenge_method%3DS256%26nonce%3DOVNjT2ZWNUN3dTB6M2FKTGRYQnZDaG1RWjRNdTJIdFVWejZGcEpPUTdDZ35X">
                      Portál
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
