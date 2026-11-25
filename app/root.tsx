import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import { useChangeLanguage } from "~/utils/i18n";
import { i18next } from "~/utils/i18next.server";
import { getArticles } from "~/utils/substack.server";
import "./styles/app.css";

export const links: Route.LinksFunction = () => [
    { rel: "icon", href: "/favicon.png" },
];

export async function loader({ request }: Route.LoaderArgs) {
  const [locale, articles] = await Promise.all([
    i18next.getLocale(request),
    getArticles(),
  ]);
  return { locale, hasArticles: articles.length > 0 };
}

export const handle = {
  i18n: ["common"],
};

export function useRootLoaderData() {
  return useRouteLoaderData<typeof loader>("root");
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { locale, hasArticles } = useRootLoaderData() ?? {
    locale: "cs",
    hasArticles: false,
  };

  useChangeLanguage(locale);

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header showArticles={hasArticles} />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container-fluid" style={{ padding: "4rem 2rem" }}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre style={{ overflowX: "auto", padding: "1rem" }}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
