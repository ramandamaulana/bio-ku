const loadItems = document.querySelectorAll(".load-item");
const buttons = document.querySelectorAll(".link-button");
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

function updateThemeToggle(theme) {
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap");
  themeColor.setAttribute("content", isDark ? "#000000" : "#ffffff");
}

updateThemeToggle(document.documentElement.dataset.theme);

themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  updateThemeToggle(theme);

  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Theme still works for the current page when storage is unavailable.
  }
});

loadItems.forEach((item, index) => {
  item.style.setProperty("--load-index", index);
});

requestAnimationFrame(() => {
  document.body.classList.add("is-loaded");
});

buttons.forEach((button) => {
  button.addEventListener("pointerdown", (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = button.getBoundingClientRect();
    const ripple = document.createElement("span");

    ripple.className = "ripple";
    ripple.style.left = `${event.clientX - bounds.left}px`;
    ripple.style.top = `${event.clientY - bounds.top}px`;

    button.append(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  });
});
