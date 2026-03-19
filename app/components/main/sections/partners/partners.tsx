import { EmblaSectionCarousel } from "~/components/main/sections/carousel/carousel";

export function Partners() {
  return (
    <EmblaSectionCarousel
      id="partneri"
      sectionClassName="section-partners"
      title="Partneři"
    >
      <div className="embla-item">
        <div className="section-carousel-item">
          <img src="/images/ondrej-zemek.jpg" alt="Ondřej Zemek" className="img-fluid" />
          <h3>Právo, advokacie</h3>
          <h2>Ondřej Zemek</h2>
          <p>
            Dotáhne Váš deal, ochrání Váš byznys. Ať jde o fúze, akvizice nebo
            startupy.
          </p>
        </div>
      </div>

      <div className="embla-item">
        <div className="section-carousel-item">
          <img src="/images/orkan-plus.png" alt="Orkán plus" className="img-fluid" />
          <h3>Účetnictví, daně</h3>
          <h2>ORKÁN plus</h2>
          <p>
            Účetní, daňové a ekonomické služeb jako celek na komfortní úrovni.
            Tak, aby se naši klienti mohli plně soustředit na svoji hlavní
            výdělečnou činnost.
          </p>
        </div>
      </div>
    </EmblaSectionCarousel>
  );
}
