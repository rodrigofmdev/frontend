// /scripts/data/populate-pricing.js
import { PRICING_TEXTS, NAV_LINKS, FOOTER_TEXT } from "./texts.js";

// Navbar
const navList = document.querySelector("#navbarNav ul");
navList.innerHTML = NAV_LINKS.map(
  (link) =>
    `<li class="nav-item"><a class="nav-link${window.location.pathname.endsWith(link.href) ? " active" : ""}" href="${link.href}">${link.text}</a></li>`
).join("");

// Conteúdo
document.title = PRICING_TEXTS.pageTitle;
document.getElementById("page-heading").textContent = PRICING_TEXTS.heading;

const plansContainer = document.getElementById("plans-container");
plansContainer.innerHTML = PRICING_TEXTS.plans
  .map(
    (plan) => `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-header text-center">
          <h3>${plan.name}</h3>
          <h4>${plan.price}</h4>
        </div>
        <ul class="list-group list-group-flush px-3 py-2">
          ${plan.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <div class="card-footer text-center">
          <button class="btn btn-primary">Select</button>
        </div>
      </div>
    </div>
  `
  )
  .join("");

// Footer
document.getElementById("footer-text").textContent = FOOTER_TEXT;
