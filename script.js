// GSAP ANIMATION
gsap.from(".profile",{y:-40,opacity:0,duration:1});
gsap.from("h1",{opacity:0,duration:1});
gsap.from("h2",{opacity:0,delay:.3});
gsap.from(".subtitle",{opacity:0,delay:.5});
gsap.from(".progress",{opacity:0,delay:.7});
gsap.from(".certificates",{opacity:0,delay:1});

// TYPING TEXT
const roles = [
  "Cyber Security Enthusiast",
  "Cloud Computing Engineer",
  "Desktop App Developer",
  "Full Stack Web Developer"
];

let i=0,j=0,current="",isDeleting=false;

function type(){
  current = roles[i];

  if(!isDeleting){
    document.querySelector(".typing").textContent=current.substring(0,j++);
    if(j>current.length){isDeleting=true;setTimeout(type,1000);return;}
  }else{
    document.querySelector(".typing").textContent=current.substring(0,j--);
    if(j==0){isDeleting=false;i=(i+1)%roles.length;}
  }

  setTimeout(type,70);
}
type();

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
