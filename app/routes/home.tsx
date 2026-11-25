import type { Route } from "./+types/home";
import { Hero } from "~/components/main/sections/hero/hero";
import { About } from "~/components/main/sections/about/about";
import { Partners } from "~/components/main/sections/partners/partners";
import { Values } from "~/components/main/sections/values/values";
import { Services } from "~/components/main/sections/services/services";
import { Collaboration } from "~/components/main/sections/collaboration/collaboration";
import { Articles } from "~/components/main/sections/articles/articles";
import { Contact } from "~/components/main/sections/contact/contact";
import { i18next } from "~/utils/i18next.server";
import { getArticleSummaries } from "~/utils/substack.server";

const ARTICLES_LIMIT = 10;

export async function loader({ request }: Route.LoaderArgs) {
  const [t, articles] = await Promise.all([
    i18next.getFixedT(request, "common"),
    getArticleSummaries(ARTICLES_LIMIT),
  ]);

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    articles,
  };
}

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: data?.title },
    { name: "description", content: data?.description },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main>
      <Hero />
      <About />
      <Partners />
      <Values />
      <Services />
      <Collaboration />
      <Articles articles={loaderData.articles} />
      <Contact />
    </main>
  );
}
