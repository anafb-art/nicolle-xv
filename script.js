
const steps = ["cover", "envelope", "invite", "details", "site", "final"];

function setDots(id) {
  document.querySelectorAll(".dot").forEach(dot => {
    dot.classList.toggle("active", dot.dataset.step === id);
  });
}

function go(id) {
  document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  setDots(id);
}

function goEnvelope() {
  go("envelope");
  const card = document.getElementById("envelopeCard");
  const pull = document.getElementById("pullBtn");
  card.classList.remove("open");
  pull.classList.remove("show");
  setTimeout(() => card.classList.add("open"), 250);
  setTimeout(() => pull.classList.add("show"), 1850);
}

function goInvite() {
  go("invite");
}

function resetSite() {
  document.getElementById("envelopeCard").classList.remove("open");
  document.getElementById("pullBtn").classList.remove("show");
  go("cover");
}

function addDecor() {
  const decor = document.getElementById("decor");

  for (let i = 0; i < 14; i++) {
    const l = document.createElement("span");
    l.className = "lantern";
    l.style.left = Math.random() * 100 + "vw";
    l.style.animationDelay = Math.random() * 14 + "s";
    l.style.animationDuration = (14 + Math.random() * 8) + "s";
    decor.appendChild(l);
  }

  for (let i = 0; i < 30; i++) {
    const s = document.createElement("span");
    s.className = "spark";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 65 + "vh";
    s.style.animationDelay = Math.random() * 4 + "s";
    decor.appendChild(s);
  }

  for (let i = 0; i < 10; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDelay = Math.random() * 12 + "s";
    p.style.animationDuration = (12 + Math.random() * 8) + "s";
    decor.appendChild(p);
  }
}

addDecor();
