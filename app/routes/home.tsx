import type { Route } from "./+types/home";
import { Hero } from "~/components/main/sections/hero/hero";
import { About } from "~/components/main/sections/about/about";
import { Partners } from "~/components/main/sections/partners/partners";
import { Values } from "~/components/main/sections/values/values";
import { Services } from "~/components/main/sections/services/services";
import { Collaboration } from "~/components/main/sections/collaboration/collaboration";
import { Contact } from "~/components/main/sections/contact/contact";
import { i18next } from "~/utils/i18next.server";

export async function loader({ request }: Route.LoaderArgs) {
  const t = await i18next.getFixedT(request, "common");
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: data?.title },
    { name: "description", content: data?.description },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Partners />
      <Values />
      <Services />
      <Collaboration />
      <Contact />
    </main>
  );
}
