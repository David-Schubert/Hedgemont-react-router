import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("clanky/:slug", "routes/article.tsx"),
  route("language", "routes/language.ts"),
] satisfies RouteConfig;
