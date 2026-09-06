// Fonction pour afficher les coordonnées de contact avec défilement fluide
function showContactMessage(elementId) {
  const msg = document.getElementById(elementId);
  if (!msg) return;
  
  msg.innerHTML =
    "<strong>Merci pour votre intérêt !</strong><br>" +
    "Pour une réponse rapide, contactez-nous au <a href='tel:0631639079'>06 31 63 90 79</a><br>" +
    "ou par mail : <a href='mailto:ecowaytec@gmail.com'>ecowaytec@gmail.com</a>";
  
  msg.style.display = "block";
  
  if (!elementId.includes('nav')) {
      const y = msg.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
  }
}

// Initialisation globale au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  
  // --- GESTION DES BOUTONS DE CONTACT ---
  const btn1 = document.getElementById("contactBtn1");
  if (btn1) btn1.addEventListener("click", () => showContactMessage("contactMessage1"));

  const btn2 = document.getElementById("contactBtn2");
  if (btn2) btn2.addEventListener("click", () => showContactMessage("contactMessage2"));

  const btn3 = document.getElementById("contactBtn3");
  if (btn3) btn3.addEventListener("click", () => showContactMessage("contactMessage3"));

  // Bouton de contact dans le menu de navigation
  const navBtn = document.getElementById("navContactBtn");
  if (navBtn) {
    navBtn.addEventListener("click", () => {
      const footer = document.querySelector('.cta-footer');
      if (footer) {
        const y = footer.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  }

  // --- ANIMATIONS D'APPARITION AU DÉFILEMENT ---
  const observerOptions = {
    threshold: 0.1
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  };

  const fadeObserver = new IntersectionObserver(handleIntersection, observerOptions);
  
  document.querySelectorAll('.card, .feature-item, .gyropode-img-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    fadeObserver.observe(el);
  });

  // --- BOUTON RETOUR EN HAUT ---
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // --- LOGIQUE LIGHTBOX / ZOOM IMAGE ---
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.querySelector(".lightbox-close");

  if (lightbox && lightboxImg) {
    // Sélectionne toutes les images cliquables de la page
    const clickableImages = document.querySelectorAll(
      ".preview-image-wrapper img, .card-image-wrapper img, .gyropode-img-card img"
    );

    clickableImages.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Image agrandie";
      });
    });

    // Fermer avec le bouton 'X'
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
      });
    }

    // Fermer au clic en dehors de l'image
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });

    // Fermer avec la touche Échap
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.style.display === "block") {
        lightbox.style.display = "none";
      }
    });
  }
});
