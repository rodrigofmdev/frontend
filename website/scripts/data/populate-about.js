// populate-about.js - injeta os textos da página About

import { ABOUT_TEXTS, NAV_LINKS, FOOTER_TEXT } from "./texts.js";

// Cabeçalho - navbar
const navList = document.querySelector("#navbarNav ul");
navList.innerHTML = NAV_LINKS.map(
  (link) =>
    `<li class="nav-item"><a class="nav-link${window.location.pathname.endsWith(link.href) ? " active" : ""}" href="${link.href}">${link.text}</a></li>`
).join("");

// Conteúdo da página
document.title = ABOUT_TEXTS.pageTitle;
document.getElementById("page-heading").textContent = ABOUT_TEXTS.heading;
document.getElementById("about-content").textContent = ABOUT_TEXTS.content;
document.getElementById("mission-title").textContent = ABOUT_TEXTS.missionTitle;
document.getElementById("mission-content").textContent = ABOUT_TEXTS.missionContent;

// Footer
document.getElementById("footer-text").textContent = FOOTER_TEXT;
