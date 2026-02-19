gsap.registerPlugin(ScrollTrigger)

// HERO
gsap.from(".glow",{opacity:0,y:-40,duration:1})
gsap.from(".progress-custom",{opacity:0,delay:.3})
gsap.from(".progress-text",{opacity:0,delay:.5})
gsap.from(".arrow-down",{opacity:0,delay:.7})

// PROFILE
gsap.from(".profile-wrapper",{
  scrollTrigger:"#profile-section",
  scale:.8,
  opacity:0,
  duration:1
})

gsap.from(".hero-role",{
  scrollTrigger:"#profile-section",
  y:30,
  opacity:0,
  duration:1
})

gsap.from(".desc",{
  scrollTrigger:"#profile-section",
  y:30,
  opacity:0,
  duration:1,
  delay:.2
})

// CERTIFICATE
gsap.from(".cert-card",{
  scrollTrigger:".cert-grid",
  y:60,
  opacity:0,
  stagger:.2
})

// LIGHTBOX
const lightbox = document.getElementById("lightbox")
const lightboxImg = lightbox.querySelector("img")

document.querySelectorAll(".cert-card img").forEach(img=>{
  img.onclick=()=>{
    lightbox.style.display="flex"
    lightboxImg.src=img.src
  }
})

document.querySelector(".close-lightbox").onclick=()=>{
  lightbox.style.display="none"
}

lightbox.onclick=e=>{
  if(e.target===lightbox){
    lightbox.style.display="none"
  }
}
