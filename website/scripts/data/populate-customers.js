// /scripts/data/populate-customers.js
import { CUSTOMERS_TEXTS, NAV_LINKS, FOOTER_TEXT } from "./texts.js";

// Preenche navbar
const navList = document.querySelector("#navbarNav ul");
navList.innerHTML = NAV_LINKS.map(
  (link) =>
    `<li class="nav-item"><a class="nav-link${window.location.pathname.endsWith(link.href) ? " active" : ""}" href="${link.href}">${link.text}</a></li>`
).join("");

// Conteúdo principal
document.title = CUSTOMERS_TEXTS.pageTitle;
document.getElementById("page-heading").textContent = CUSTOMERS_TEXTS.heading;

const testimonialsContainer = document.getElementById("testimonials-container");
testimonialsContainer.innerHTML = CUSTOMERS_TEXTS.testimonials
  .map(
    (t) => `
    <div class="card mb-3">
      <div class="card-body">
        <p class="card-text">"${t.comment}"</p>
        <h5 class="card-title">${t.name}</h5>
        <h6 class="card-subtitle text-muted">${t.role}</h6>
      </div>
    </div>
  `
  )
  .join("");

// Footer
document.getElementById("footer-text").textContent = FOOTER_TEXT;
