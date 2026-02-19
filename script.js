// HERO ANIMATION

gsap.from(".glow",{opacity:0,y:-40,duration:1});
gsap.from(".desc",{opacity:0,y:20,delay:.3});
gsap.from(".profile",{opacity:0,scale:.8,delay:.6});
gsap.from(".progress",{opacity:0,delay:.9});
gsap.from(".certificates",{opacity:0,y:50,delay:1.2});

// FLOATING PROFILE

gsap.to(".profile",{
  y:15,
  repeat:-1,
  yoyo:true,
  duration:3,
  ease:"power1.inOut"
});

// LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".cert-grid img").forEach(img=>{
  img.onclick=()=>{
    lightbox.style.display="flex";
    lightboxImg.src=img.src;
  };
});

lightbox.onclick=()=>lightbox.style.display="none";
