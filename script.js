// script.js
// Animasi ringan dengan GSAP (hanya fade-in, tanpa ScrollTrigger)
window.addEventListener('load', () => {
  // Hero
  gsap.from(".glow", { opacity: 0, y: -30, duration: 0.8 });
  gsap.from(".progress", { opacity: 0, delay: 0.3, duration: 0.6 });
  gsap.from(".progress-text", { opacity: 0, delay: 0.5, duration: 0.6 });
  gsap.from(".arrow-down", { opacity: 0, delay: 0.8, duration: 0.5 });

  // Profile (muncul saat scroll, pakai scroll event sederhana atau biarkan langsung fade-in)
  // Agar tidak berat, kita langsung fade-in setelah load (dengan jeda)
  gsap.from(".profile-img", { 
    opacity: 0, 
    x: -30, 
    duration: 0.8, 
    delay: 0.3,
    scrollTrigger: {
      trigger: ".profile-section",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
  
  gsap.from(".desc", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".profile-section",
      start: "top 80%"
    }
  });

  gsap.from(".badge-skills", {
    opacity: 0,
    scale: 0.5,
    stagger: 0.1,
    duration: 0.5,
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: ".profile-section",
      start: "top 80%"
    }
  });

  // Certificates
  gsap.from(".cert-card", {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".achievements-section",
      start: "top 80%"
    }
  });
});

// LIGHTBOX dengan tombol close
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close-lightbox");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.style.display = "flex";
  setTimeout(() => {
    lightbox.classList.add("show");
  }, 10);
}

function closeLightbox() {
  lightbox.classList.remove("show");
  setTimeout(() => {
    lightbox.style.display = "none";
  }, 250);
}

document.querySelectorAll(".cert-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    if (img) openLightbox(img.src);
  });
});

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
