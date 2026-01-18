export type ThemeVariant =
  | "minimalist"
  | "cheerful"
  | "retro"
  | "dark"
  | "radio"
  | "ios"
  | "pastel"
  | "vinyl"
  | "ipod"
  | "retroradio";

const THEME_COOKIE_NAME = "radio-theme";
const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function getThemeFromCookie(cookieHeader: string | null): ThemeVariant {
  if (!cookieHeader) return "minimalist";

  const cookies = cookieHeader.split(";").reduce(
    (acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

  const theme = cookies[THEME_COOKIE_NAME];
  if (theme === "cheerful") return "cheerful";
  if (theme === "retro") return "retro";
  if (theme === "dark") return "dark";
  if (theme === "radio") return "radio";
  if (theme === "ios") return "ios";
  if (theme === "pastel") return "pastel";
  if (theme === "vinyl") return "vinyl";
  if (theme === "ipod") return "ipod";
  if (theme === "retroradio") return "retroradio";
  return "minimalist";
}

export function setThemeCookie(theme: ThemeVariant): string {
  return `${THEME_COOKIE_NAME}=${theme}; Path=/; Max-Age=${THEME_COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function getThemeFromDocument(): ThemeVariant {
  if (typeof document === "undefined") return "minimalist";

  const cookies = document.cookie.split(";").reduce(
    (acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

  const theme = cookies[THEME_COOKIE_NAME];
  if (theme === "cheerful") return "cheerful";
  if (theme === "retro") return "retro";
  if (theme === "dark") return "dark";
  if (theme === "radio") return "radio";
  if (theme === "ios") return "ios";
  if (theme === "pastel") return "pastel";
  if (theme === "vinyl") return "vinyl";
  if (theme === "ipod") return "ipod";
  if (theme === "retroradio") return "retroradio";
  return "minimalist";
}

export function setThemeToDocument(theme: ThemeVariant): void {
  document.cookie = setThemeCookie(theme);
}
