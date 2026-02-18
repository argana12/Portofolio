// GSAP INTRO
gsap.from(".profile",{scale:0,opacity:0,duration:1});
gsap.from(".title",{y:50,opacity:0});
gsap.from(".role",{opacity:0});
gsap.from(".status",{opacity:0});
gsap.from(".certificates",{opacity:0,duration:1});

// TYPING ROLES
const roles = [
  "CYBER SECURITY",
  "CLOUD ENGINEER",
  "FULL STACK DEVELOPER",
  "DESKTOP APP DEVELOPER"
];

let i=0,j=0,current="",isDeleting=false;

function type(){
  current = roles[i];

  if(!isDeleting){
    document.querySelector(".typing").textContent=current.substring(0,j++);
    if(j>current.length){isDeleting=true;setTimeout(type,1000);return;}
  }
  else{
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

// THREE JS
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas:document.getElementById("bg"),
  alpha:true
});

renderer.setSize(innerWidth,innerHeight);

const geo = new THREE.TorusKnotGeometry(10,3,100,16);
const mat = new THREE.MeshBasicMaterial({
  color:0x00ff9c,
  wireframe:true
});

const mesh = new THREE.Mesh(geo,mat);
scene.add(mesh);

camera.position.z=25;

function animate(){
  requestAnimationFrame(animate);
  mesh.rotation.x+=0.003;
  mesh.rotation.y+=0.005;
  renderer.render(scene,camera);
}
animate();

window.addEventListener("resize",()=>{
  renderer.setSize(innerWidth,innerHeight);
  camera.aspect=innerWidth/innerHeight;
  camera.updateProjectionMatrix();
});
