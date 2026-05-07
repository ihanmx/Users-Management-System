"use server";
// server action to switch the locale
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { Locale } from "next-intl";

export async function changeLocaleAction(locale: Locale) {
  const store = await cookies();
  store.set("NEXT_LOCALE", locale, { path: "/" });
  revalidatePath("/", "layout");
  //    added revalidatePath("/", "layout") so the layout re-runs on the next render, which makes request.ts pick up the new cookie and reload the matching messages.
}
