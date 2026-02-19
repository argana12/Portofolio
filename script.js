gsap.registerPlugin(ScrollTrigger)

gsap.from(".glow",{opacity:0,y:-40,duration:1})
gsap.from(".progress-custom",{opacity:0,delay:.3})
gsap.from(".progress-text",{opacity:0,delay:.5})
gsap.from(".arrow-down",{opacity:0,delay:.7})

gsap.from(".profile-img",{
  scrollTrigger:".profile-img",
  x:-60,
  opacity:0,
  duration:1
})

gsap.from(".desc",{
  scrollTrigger:".desc",
  y:30,
  opacity:0,
  duration:1
})

gsap.from(".badge-skills",{
  scrollTrigger:".badge-skills",
  scale:.6,
  opacity:0,
  stagger:.1
})

gsap.from(".cert-card",{
  scrollTrigger:".cert-grid",
  y:60,
  opacity:0,
  stagger:.2
})

const lightbox = document.getElementById("lightbox")
const img = lightbox.querySelector("img")

document.querySelectorAll(".cert-card img").forEach(el=>{
  el.onclick=()=>{
    img.src=el.src
    lightbox.style.display="flex"
  }
})

lightbox.onclick=()=>lightbox.style.display="none"
