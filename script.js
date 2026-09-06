// Fonction pour afficher les coordonnées de contact avec défilement fluide
function showContactMessage(elementId) {
    const msg = document.getElementById(elementId);
    if (!msg) return;
    
    msg.innerHTML =
      "<strong>Merci pour votre intérêt !</strong><br>" +
      "Pour une réponse rapide, contactez-nous au <a href='tel:0631639079'>06 31 63 90 79</a><br>" +
      "ou par mail : <a href='mailto:ecowaytec@gmail.com'>ecowaytec@gmail.com</a>";
    
    msg.style.display = "block";
    
    // Alignement de la vue sur le message (avec marge pour le menu fixe)
    if (!elementId.includes('nav')) {
        const y = msg.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  
  // Association des événements aux boutons d'action
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
  
  // Animations d'apparition au défilement (Intersection Observer)
  document.addEventListener("DOMContentLoaded", () => {
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
      
      // Application des effets sur les cartes, items et blocs de la page
      document.querySelectorAll('.card, .feature-item, .highlight-content').forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
          el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          fadeObserver.observe(el);
      });
  });
  
  // Bouton "Retour en haut"
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
  // --- LIGHTBOX / ZOOM IMAGE LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("imageLightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.querySelector(".lightbox-close");
  
    if (!lightbox || !lightboxImg) return;
  
    // Cibler toutes les images cliquables de la page
    const clickableImages = document.querySelectorAll(
      ".preview-image-wrapper img, .card-image-wrapper img, .gyropode-img-card img"
    );
  
    clickableImages.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      });
    });
  
    // Fermer au clic sur le bouton 'X'
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
  
    // Fermer avec la touche Échap (Escape)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.style.display === "block") {
        lightbox.style.display = "none";
      }
    });
  });
