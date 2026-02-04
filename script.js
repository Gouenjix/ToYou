const yesBtn = document.getElementById("yesBtn");

if (yesBtn) {

  let isMoving = false;

  yesBtn.addEventListener("mouseenter", () => {
    if (!isMoving) {
      // once we hover, set to fixed so it can move anywhere
      yesBtn.style.position = "fixed";
      isMoving = true;
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (!isMoving) return; // don't move until hovered

    const rect = yesBtn.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const distance = Math.hypot(e.clientX - btnX, e.clientY - btnY);

    if (distance < 140) {
      moveButton();
    }
  });

  // mobile support
  yesBtn.addEventListener("touchstart", moveButton);

  function moveButton() {
    const padding = 20;
    const maxX = window.innerWidth - yesBtn.offsetWidth - padding;
    const maxY = window.innerHeight - yesBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    yesBtn.style.left = `${x}px`;
    yesBtn.style.top = `${y}px`;
  }
}
