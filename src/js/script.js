
// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
  // Mise à jour des attributs ARIA pour accessibilité
const isOpen = toggle.getAttribute("aria-expanded") === "true";
  nav.setAttribute("aria-hidden", String(isOpen)); 
  toggle.setAttribute("aria-expanded", String(!isOpen)); 
  document.body.classList.toggle("noscroll");
});