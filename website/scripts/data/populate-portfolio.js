// /scripts/data/populate-portfolio.js
import { PORTFOLIO_TEXTS, NAV_LINKS, FOOTER_TEXT } from "./texts.js";

// Preenche navbar dinamicamente
const navList = document.querySelector("#navbarNav ul");
navList.innerHTML = NAV_LINKS.map(
  (link) =>
    `<li class="nav-item"><a class="nav-link${window.location.pathname.endsWith(link.href) ? " active" : ""}" href="${link.href}">${link.text}</a></li>`
).join("");

// Conteúdo da página
document.title = PORTFOLIO_TEXTS.pageTitle;
document.getElementById("page-heading").textContent = PORTFOLIO_TEXTS.heading;
document.getElementById("portfolio-intro").textContent = PORTFOLIO_TEXTS.intro;

// Renderiza projetos dinamicamente
const projectsContainer = document.getElementById("projects-container");
projectsContainer.innerHTML = PORTFOLIO_TEXTS.projects
  .map(
    (project) => `
    <div class="col-md-4 mb-4">
      <img src="${project.image}" alt="${project.imageAlt}" class="img-fluid rounded" />
      <h3 class="mt-2">${project.title}</h3>
      <p>${project.description}</p>
    </div>
  `
  )
  .join("");

// Footer
document.getElementById("footer-text").textContent = FOOTER_TEXT;
