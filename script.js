document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Modal Logic
    const modal = document.getElementById("contactModal");
    const closeBtn = document.querySelector(".close-btn");

    function openModal() {
        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");
    }

    function closeModal() {
        modal.classList.remove("show");
        modal.setAttribute("aria-hidden", "true");
    }

    const btn1 = document.getElementById("contactBtn1");
    const btn3 = document.getElementById("contactBtn3");

    if (btn1) btn1.addEventListener("click", openModal);
    if (btn3) btn3.addEventListener("click", openModal);

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
        // Allow closing with keyboard (Enter/Space)
        closeBtn.addEventListener("keydown", (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                closeModal();
            }
        });
    }

    // Close modal when clicking outside the content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });
});
