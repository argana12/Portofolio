// script.js

// Animasi GSAP
gsap.from(".glow", { opacity: 0, y: -40, duration: 1 });
gsap.from(".desc", { opacity: 0, y: 20, delay: 0.3 });
gsap.from(".badge-skills", {
  opacity: 0,
  scale: 0.8,
  stagger: 0.1,
  delay: 0.5,
  ease: "back.out(1.2)",
});
gsap.from(".profile-wrapper", {
  opacity: 0,
  scale: 0.5,
  rotation: -5,
  delay: 0.9,
  duration: 1,
});
gsap.from(".progress", { opacity: 0, delay: 1.2 });
gsap.from(".cert-card", {
  opacity: 0,
  y: 40,
  stagger: 0.15,
  delay: 1.4,
  duration: 0.8,
});

// Floating profile (gerak lambat)
gsap.to(".profile-wrapper", {
  y: 12,
  repeat: -1,
  yoyo: true,
  duration: 4,
  ease: "power1.inOut",
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".cert-card").forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    if (img) {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    }
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Tutup lightbox dengan tombol ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});
