// /scripts/data/populate-contact.js
import { CONTACT_TEXTS, NAV_LINKS, FOOTER_TEXT } from "./texts.js";

// Navbar
const navList = document.querySelector("#navbarNav ul");
navList.innerHTML = NAV_LINKS.map(
  (link) =>
    `<li class="nav-item"><a class="nav-link${window.location.pathname.endsWith(link.href) ? " active" : ""}" href="${link.href}">${link.text}</a></li>`
).join("");

// Conteúdo da página
document.title = CONTACT_TEXTS.pageTitle;
document.getElementById("page-heading").textContent = CONTACT_TEXTS.heading;
document.getElementById("page-description").textContent = CONTACT_TEXTS.description;

// Preenche labels e placeholders do formulário
document.getElementById("label-name").textContent = CONTACT_TEXTS.labels.name;
document.getElementById("input-name").placeholder = CONTACT_TEXTS.placeholders.name;

document.getElementById("label-email").textContent = CONTACT_TEXTS.labels.email;
document.getElementById("input-email").placeholder = CONTACT_TEXTS.placeholders.email;

document.getElementById("label-message").textContent = CONTACT_TEXTS.labels.message;
document.getElementById("input-message").placeholder = CONTACT_TEXTS.placeholders.message;

document.getElementById("submit-button").textContent = CONTACT_TEXTS.buttonText;

// Footer
document.getElementById("footer-text").textContent = FOOTER_TEXT;

// Validação e envio do formulário
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  fetch("https://formspree.io/f/{your-form-id}", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert(CONTACT_TEXTS.successMessage);
        form.reset();
        form.classList.remove("was-validated");
      } else {
        alert(CONTACT_TEXTS.errorMessage);
      }
    })
    .catch(() => alert(CONTACT_TEXTS.networkErrorMessage));
});
