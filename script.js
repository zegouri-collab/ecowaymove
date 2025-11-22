function showContactMessage(elementId) {
  const msg = document.getElementById(elementId);
  if (!msg) return;
  
  msg.innerHTML =
    "<strong>Merci pour votre intérêt !</strong><br>" +
    "Pour une réponse rapide, contactez-nous au <a href='tel:0631639079'>06 31 63 90 79</a><br>" +
    "ou visitez <a href='https://www.ecowaytec.com' target='_blank'>ecowaytec.com</a>";
  
  msg.style.display = "block";
  
  // Smooth scroll to message if it's not in the nav
  if (!elementId.includes('nav')) {
      // Small offset to account for sticky header
      const y = msg.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
  }
}

// Bind events to buttons if they exist
const btn1 = document.getElementById("contactBtn1");
if (btn1) btn1.addEventListener("click", () => showContactMessage("contactMessage1"));

const btn2 = document.getElementById("contactBtn2");
if (btn2) btn2.addEventListener("click", () => showContactMessage("contactMessage2"));

const btn3 = document.getElementById("contactBtn3");
if (btn3) btn3.addEventListener("click", () => showContactMessage("contactMessage3"));

// Nav contact button (optional behavior)
const navBtn = document.getElementById("navContactBtn");
if (navBtn) {
  navBtn.addEventListener("click", () => {
      // Scroll to footer or show a modal. For now, let's scroll to the contact section at the bottom.
      const footer = document.querySelector('.cta-footer');
      if(footer) {
          const y = footer.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
      }
  });
}

// Intersection Observer for fade-in animations
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in class to sections/cards
    document.querySelectorAll('.card, .feature-item, .highlight-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Helper to trigger the transition
    const handleIntersection = (entries, obs) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                obs.unobserve(entry.target);
            }
        });
    };
    
    const fadeObserver = new IntersectionObserver(handleIntersection, observerOptions);
    document.querySelectorAll('.card, .feature-item, .highlight-content').forEach(el => {
        fadeObserver.observe(el);
    });
});
