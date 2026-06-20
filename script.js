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

document.getElementById("quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const note = event.currentTarget.querySelector(".form-note");
  note.textContent = "Thank you — your enquiry is ready for the ET Freight team.";
  note.style.color = "#fff";
  event.currentTarget.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
