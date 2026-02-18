// AUTO DARK MODE (SYSTEM)
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  document.body.classList.add("dark");
}

// TOGGLE THEME
document.getElementById("themeToggle").onclick = () =>{
  document.body.classList.toggle("dark");
};

// LOADING BAR
gsap.to(".progress-bar",{
  width:"100%",
  duration:2,
  onComplete:()=>{
    gsap.to("#loader",{opacity:0,display:"none"});
  }
});

// GSAP INTRO
gsap.from(".title",{y:100,opacity:0,duration:1});
gsap.from(".typing",{opacity:0,delay:1});
gsap.from("form",{opacity:0,delay:1.5});
gsap.from(".socials",{opacity:0,delay:2});

// TYPING EFFECT
const text = "We are crafting something powerful for you...";
let i = 0;

function typing(){
  if(i < text.length){
    document.querySelector(".typing").textContent += text.charAt(i);
    i++;
    setTimeout(typing,40);
  }
}
typing();

// EMAIL → LOCAL STORAGE
document.getElementById("emailForm").addEventListener("submit",e=>{
  e.preventDefault();

  const email = e.target[0].value;

  let data = JSON.parse(localStorage.getItem("emails")) || [];
  data.push(email);

  localStorage.setItem("emails", JSON.stringify(data));

  document.getElementById("msg").textContent = "Email saved ✔";
  e.target.reset();
});

// THREE JS BACKGROUND
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas:document.getElementById("bg"),
  alpha:true
});

renderer.setSize(innerWidth,innerHeight);

const geometry = new THREE.TorusKnotGeometry(10,3,100,16);
const material = new THREE.MeshBasicMaterial({
  color:0x6a5acd,
  wireframe:true
});

const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

camera.position.z = 30;

function animate(){
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene,camera);
}
animate();

// RESPONSIVE FIX
window.addEventListener("resize",()=>{
  renderer.setSize(innerWidth,innerHeight);
  camera.aspect = innerWidth/innerHeight;
  camera.updateProjectionMatrix();
});
