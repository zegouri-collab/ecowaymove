function showContactMessage() {
    const msg = document.getElementById("contactMessage");
    msg.innerHTML =
      "<strong>Merci pour votre intérêt !</strong><br>" +
      "Contactez-nous au <a href='tel:0631639079'>06 31 63 90 79</a> ou via le site " +
      "<a href='https://www.ecowaytec.com' target='_blank'>ecowaytec.com</a>";
    msg.style.display = "block";
    window.scrollTo({ top: msg.offsetTop - 40, behavior: "smooth" });
  }
  
  document.getElementById("contactBtn1").addEventListener("click", showContactMessage);
  document.getElementById("contactBtn2").addEventListener("click", showContactMessage);
  document.getElementById("contactBtn3").addEventListener("click", showContactMessage);