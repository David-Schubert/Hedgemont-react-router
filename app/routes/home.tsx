import { Hero } from "~/components/main/sections/hero/hero";
import type { Route } from "./+types/home";
import { Partners } from "~/components/main/sections/partners/partners";
import { Values } from "~/components/main/sections/values/values";
import { Services } from "~/components/main/sections/services/services";
import { Collaboration } from "~/components/main/sections/collaboration/collaboration";
import { Contact } from "~/components/main/sections/contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HedgeMont – nezávislá správa majetku" },
    { name: "description", content: "Správa a promyšlené rozložení majetku včetně mezinárodního umístění. Bez střetu zájmů, s řízením rizik, měn a pravidelným reportingem." },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Values />
      <Services />
      <Collaboration />
      <Contact />
    </main>
  );
}
