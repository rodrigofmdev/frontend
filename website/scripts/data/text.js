// texts.js - textos para todas as páginas

export const NAV_LINKS = [
  { href: "index.html", text: "Home" },
  { href: "about.html", text: "About" },
  { href: "portfolio.html", text: "Portfolio" },
  { href: "customers.html", text: "Customers" },
  { href: "pricing.html", text: "Pricing" },
  { href: "contact.html", text: "Contact" },
];

export const FOOTER_TEXT = "© 2025 MyPortfolio. All rights reserved.";

export const HOME_TEXTS = {
  heroTitle: "Welcome to My Professional Portfolio",
  heroDescription: "Showcasing my projects and skills as a frontend developer.",
  aboutPreviewTitle: "About Me",
  aboutPreviewText:
    "I am a passionate frontend developer with experience in building responsive, accessible, and user-friendly websites.",
  aboutButtonText: "Learn More",
  portfolioSectionTitle: "Recent Projects",
  project1: {
    title: "Project One",
    description: "Responsive web app built with HTML, CSS, and JavaScript.",
  },
  project2: {
    title: "Project Two",
    description: "Interactive UI with React and Bootstrap integration.",
  },
  project3: {
    title: "Project Three",
    description: "E-commerce front built with accessibility best practices.",
  },
  portfolioButtonText: "View Full Portfolio",
};

export const ABOUT_TEXTS = {
  pageTitle: "About Me - My Portfolio",
  heading: "About Me",
  content:
    "With over 3 years in frontend development, I specialize in building efficient and scalable web applications. Skilled in JavaScript, CSS, HTML5, and modern frameworks. Passionate about UI/UX and clean code.",
  missionTitle: "My Mission",
  missionContent:
    "To deliver high-quality, accessible, and performant websites that enhance user experience and meet client goals.",
};

export const PORTFOLIO_TEXTS = {
  pageTitle: "Portfolio - My Projects",
  heading: "My Work",
  intro:
    "Here are some selected projects showcasing my skills in frontend development.",
  projects: [
    {
      title: "Project Alpha",
      description: "A responsive website with custom animations.",
      imageAlt: "Screenshot of Project Alpha",
      image: "../assets/images/portfolio1.jpg",
    },
    {
      title: "Project Beta",
      description: "Single Page Application built with React.",
      imageAlt: "Screenshot of Project Beta",
      image: "../assets/images/portfolio2.jpg",
    },
    {
      title: "Project Gamma",
      description: "E-commerce front-end with accessibility features.",
      imageAlt: "Screenshot of Project Gamma",
      image: "../assets/images/portfolio3.jpg",
    },
  ],
};

export const CUSTOMERS_TEXTS = {
  pageTitle: "Customers - Testimonials",
  heading: "What My Clients Say",
  testimonials: [
    {
      name: "Alice Johnson",
      role: "CEO at TechCorp",
      comment:
        "Professional, attentive and delivered the project ahead of schedule.",
    },
    {
      name: "Mark Stevens",
      role: "Project Manager",
      comment:
        "Great communication and high-quality code. Highly recommended.",
    },
    {
      name: "Sophia Lee",
      role: "Startup Founder",
      comment:
        "Helped us build a sleek and responsive interface that our users love.",
    },
  ],
};

export const PRICING_TEXTS = {
  pageTitle: "Pricing Plans",
  heading: "Choose Your Plan",
  plans: [
    {
      name: "Basic",
      price: "$199",
      features: [
        "Up to 5 pages website",
        "Responsive design",
        "Basic SEO setup",
      ],
    },
    {
      name: "Standard",
      price: "$499",
      features: [
        "Up to 15 pages website",
        "Responsive design",
        "SEO optimization",
        "Performance tuning",
      ],
    },
    {
      name: "Premium",
      price: "$999",
      features: [
        "Unlimited pages",
        "Responsive design",
        "SEO & performance",
        "Custom integrations",
        "Priority support",
      ],
    },
  ],
};

export const CONTACT_TEXTS = {
  pageTitle: "Contact Me - My Portfolio",
  heading: "Contact Me",
  description: "Please fill out the form below to get in touch.",
  labels: {
    name: "Name",
    email: "Email address",
    message: "Message",
  },
  placeholders: {
    name: "Your full name",
    email: "name@example.com",
    message: "Write your message here",
  },
  buttonText: "Send Message",
  successMessage: "Message sent successfully!",
  errorMessage: "Oops! There was a problem submitting your form.",
  networkErrorMessage: "Network error. Please try again later.",
};
