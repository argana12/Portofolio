// script.js
gsap.registerPlugin(ScrollTrigger);

// Animasi awal section 1
gsap.from(".glow", { opacity: 0, y: -40, duration: 1 });
gsap.from(".progress", { opacity: 0, delay: 0.5 });
gsap.from(".progress-text", { opacity: 0, delay: 0.7 });

// Animasi profile saat scroll
gsap.from(".profile-img", {
  scrollTrigger: {
    trigger: ".section-profile",
    start: "top 80%",
  },
  opacity: 0,
  x: -50,
  duration: 1,
});

gsap.from(".desc", {
  scrollTrigger: {
    trigger: ".section-profile",
    start: "top 70%",
  },
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.2,
});

gsap.from(".badge-skills", {
  scrollTrigger: {
    trigger: ".section-profile",
    start: "top 70%",
  },
  opacity: 0,
  scale: 0.5,
  stagger: 0.1,
  duration: 0.8,
  ease: "back.out(1.2)",
});

// Animasi sertifikat satu per satu saat scroll
gsap.from(".cert-card", {
  scrollTrigger: {
    trigger: ".section-certificates",
    start: "top 80%",
  },
  opacity: 0,
  y: 60,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
});

// Floating effect pada profile (gerakan halus)
gsap.to(".profile-img", {
  y: 10,
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: "sine.inOut",
});

// LIGHTBOX dengan animasi scale
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close-lightbox");

// Buka lightbox
document.querySelectorAll(".cert-card").forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    if (img) {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
      // sedikit jeda agar transisi scale terlihat
      setTimeout(() => {
        lightbox.classList.add("show");
      }, 10);
    }
  });
});

// Tutup lightbox (tombol X dan klik background)
const closeLightbox = () => {
  lightbox.classList.remove("show");
  setTimeout(() => {
    lightbox.style.display = "none";
  }, 300); // match transition time
};

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Tutup dengan tombol ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
