function goToPage2() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClicked() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");

  document.getElementById("bgMusic").pause();
  const finalMusic = document.getElementById("finalMusic");
  finalMusic.play();
}