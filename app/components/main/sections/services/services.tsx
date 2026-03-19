import { EmblaSectionCarousel } from "~/components/main/sections/carousel/carousel";

export function Services() {
  return (
    <EmblaSectionCarousel
      id="sluzby"
      sectionClassName="section-services"
      title="Služby"
      options={{ loop: true, align: "start" }}
    >
      <div className="embla-item">
        <div className="section-carousel-item">
          <h2>Investiční poradenství</h2>
          <h3>Definice strategie</h3>
          <p>
            Stanovení jasných investičních cílů a pravidel, která respektují váš
            postoj k riziku i rodinné priority.
          </p>
          <h3>Výběr bank a investičních fondů</h3>
          <p>
            Nezávislá prověrka a selekce nejlepších institucí a produktů na
            trhu, které splňují nejpřísnější kritéria výkonnosti a stability.
          </p>
          <h3>Alokace aktiv</h3>
          <p>
            Strategické rozložení kapitálu mezi různé třídy aktiv s cílem
            maximalizovat výnos při zachování vysoké míry bezpečnosti.
          </p>
          <h3>Konsolidace dat a servis</h3>
          <p>
            Sjednocení informací z různých bank a účtů do jednoho přehledného
            celku, který umožňuje kontrolovat celkovou expozici majetku.
          </p>
        </div>
      </div>

      <div className="embla-item">
        <div className="section-carousel-item">
          <h2>Správa a ochrana majetku</h2>
          <h3>Trusty, nadace</h3>
          <p>
            Komplexní správa rodinného bohatství prostřednictvím svěřenských
            fondů a nadací.
          </p>
          <h3>Koordinace</h3>
          <p>
            Efektivní řízení všech vašich poradců a procesů pod jednou střechou.
          </p>
          <h3>Ochrana majetku</h3>
          <p>
            Maximální bezpečí vašich aktiv díky špičkovému právnímu a daňovému
            servisu.
          </p>
          <h3>Konsolidace</h3>
          <p>
            Dokonalý a sjednocený přehled o veškerém vašem majetku v reálném
            čase.
          </p>
        </div>
      </div>

      <div className="embla-item">
        <div className="section-carousel-item">
          <h2>Rodinné dědictví a nástupnictví</h2>
          <h3>Nástupnictví</h3>
          <p>Zajistíme bezproblémové předání majetku na další generaci.</p>
          <h3>Filantropie</h3>
          <p>Vezmeme si na starost filantropii i založení nadací.</p>
          <h3>Rodinná ústava</h3>
          <p>Připravíme rodinnou ústavu a postaráme se o proces řízení.</p>
          <h3>Vzdělávání</h3>
          <p>Zařídíme vzdělání nové generace jako vašich nástupců.</p>
        </div>
      </div>
    </EmblaSectionCarousel>
  );
}
