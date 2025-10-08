export type Locale = (typeof locales)[number];

export const locales = ["pl", "ua"] as const;
export const defaultLocale: Locale = "pl";
