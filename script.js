const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const routes = document.querySelectorAll(".route");
const nodes = document.querySelectorAll("[data-node]");
const mapCountry = document.querySelector(".map-country");

const countryLabels = {
  zimbabwe: "Zimbabwe",
  mozambique: "Mozambique",
  malawi: "Malawi",
  zambia: "Zambia",
  tanzania: "Tanzania",
  drc: "DRC",
  angola: "Angola",
  kenya: "Kenya",
  uganda: "Uganda"
};

function activateCountry(country) {
  routes.forEach((route) => route.classList.toggle("active", route.dataset.route === country));
  nodes.forEach((node) => node.classList.toggle("active", node.dataset.node === country));
  mapCountry.innerHTML = `${countryLabels[country]} <small>Active corridor</small>`;
}

routes.forEach((route) => {
  route.addEventListener("mouseenter", () => activateCountry(route.dataset.route));
  route.addEventListener("focus", () => activateCountry(route.dataset.route));
  route.addEventListener("click", () => activateCountry(route.dataset.route));
});

nodes.forEach((node) => {
  node.addEventListener("mouseenter", () => activateCountry(node.dataset.node));
  node.addEventListener("click", () => activateCountry(node.dataset.node));
});

menuButton.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".desktop-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 30), { passive: true });

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
  { threshold: 0.13 }
);
document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

document.getElementById("quote-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const note = form.querySelector(".form-note");
  const button = form.querySelector("button[type=submit]");

  button.disabled = true;
  note.textContent = "Sending your enquiry…";

  try {
    const response = await fetch("https://formspree.io/f/xaqgydwk", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      note.textContent = "Thank you — we'll be in touch within one business day.";
      note.style.color = "#4ade80";
      form.reset();
    } else {
      note.textContent = "Something went wrong. Please email us at info@etfreight.co.za";
      note.style.color = "#f87171";
    }
  } catch {
    note.textContent = "Connection error. Please email us at info@etfreight.co.za";
    note.style.color = "#f87171";
  } finally {
    button.disabled = false;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
