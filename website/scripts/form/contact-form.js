// Espera o carregamento do DOM para garantir que os elementos existam
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita o reload da página

      // Captura dados do formulário
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Exemplo de envio de dados via fetch para API externa (Formspree)
      fetch("https://formspree.io/f/{your-form-id}", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            alert("Message sent successfully!");
            form.reset(); // Limpa formulário após envio
          } else {
            alert("Oops! There was a problem submitting your form.");
          }
        })
        .catch(() => {
          alert("Network error. Please try again later.");
        });
    });
  }
});
