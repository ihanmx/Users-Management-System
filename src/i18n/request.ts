//runs on every request to decide the locale + load messages

import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

// getRequestConfig(...) — a next-intl helper. Whatever you return becomes the locale + messages for the current request, available to getLocale(), getTranslations(), <NextIntlClientProvider>, etc.
export default getRequestConfig(async (params) => {
  const cookieStore = await cookies();
  const locale = params.locale || cookieStore.get("NEXT_LOCALE")?.value || "en";
  const messages = (await import(`../messages/${locale}.json`)).default;
  return {
    locale,
    messages,
  };
});
