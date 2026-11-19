const KEY = "theme";

function systemPrefersDark() {
    return window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
}

export function applyTheme(theme) {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.toggle("dark", isDark);
}

export function initThemeToggle() {
    const saved = localStorage.getItem(KEY);

    const theme =
        saved ??
        (systemPrefersDark() ? "dark" : "light");

    applyTheme(theme);

    const toggle =
        document.querySelector("#theme-toggle");

    if (!toggle) {
        return;
    }

    toggle.addEventListener("click", () => {
        const isDark =
            document.documentElement
                .classList
                .contains("dark");

        const nextTheme =
            isDark ? "light" : "dark";

        localStorage.setItem(KEY, nextTheme);

        applyTheme(nextTheme);
    });
}