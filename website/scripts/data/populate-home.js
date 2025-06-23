// populate-home.js

import { HOME_TEXTS, FOOTER_TEXT } from "./text.js";

// Injetar os textos na página
document.getElementById("hero-title").textContent = HOME_TEXTS.heroTitle;
document.getElementById("hero-description").textContent = HOME_TEXTS.heroDescription;

document.getElementById("about-preview-title").textContent = HOME_TEXTS.aboutPreviewTitle;
document.getElementById("about-preview-text").textContent = HOME_TEXTS.aboutPreviewText;
document.getElementById("about-button").textContent = HOME_TEXTS.aboutButtonText;

document.getElementById("portfolio-section-title").textContent = HOME_TEXTS.portfolioSectionTitle;

document.getElementById("project1-title").textContent = HOME_TEXTS.project1.title;
document.getElementById("project1-description").textContent = HOME_TEXTS.project1.description;

document.getElementById("portfolio-button").textContent = HOME_TEXTS.portfolioButtonText;

document.getElementById("footer-text").textContent = FOOTER_TEXT;
