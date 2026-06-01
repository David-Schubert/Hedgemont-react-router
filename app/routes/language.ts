import type { Route } from "./+types/language";
import { i18nCookie } from "~/utils/i18next.server";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const lng = formData.get("lng") as string;

  return new Response(null, {
    status: 200,
    headers: { "Set-Cookie": await i18nCookie.serialize(lng) },
  });
}