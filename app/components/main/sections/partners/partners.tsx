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
          <img src="/images/michal-navratil.jpg" alt="Michal Navrátil" className="img-fluid" />
          <h3>Nemovitostní projekty</h3>
          <h2>Michal Navrátil</h2>
          <p>Investice do nemovitostních projektů, vyhodnocování investičních příležitostí a jejich management.</p>
        </div>
      </div>

      <div className="embla-item">
        <div className="section-carousel-item">
          <img src="/images/ludvik-juricka.jpg" alt="Ludvík Juřička" className="img-fluid" />
          <h3>Deloitte Legal & Private Tax</h3>
          <h2>Ludvík Juřička</h2>
          <p>Právní a daňové poradenství při správě, ochraně a strukturování majetku.</p>
        </div>
      </div>

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
            Účetní, daňové a ekonomické služby jako celek na komfortní úrovni.
            Tak, aby se naši klienti mohli plně soustředit na svoji hlavní
            výdělečnou činnost.
          </p>
        </div>
      </div>
    </EmblaSectionCarousel>
  );
}
