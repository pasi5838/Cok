const confetti = {
  start: (duration = 2000) => {
    const end = Date.now() + duration;
    const colors = ['#bb0000', '#ffffff'];

    (function frame() {
      const timeLeft = end - Date.now();
      if (timeLeft <= 0) return;
      const particleCount = 50 * (timeLeft / duration);
      confettiEffect(particleCount, colors);
      requestAnimationFrame(frame);
    })();
  }
};

function confettiEffect(count, colors) {
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.pointerEvents = "none";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  const pieces = [];
  for (let i = 0; i < count; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      color: colors[Math.floor(Math.random() * colors.length)],
      radius: Math.random() * 6 + 4
    });
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of pieces) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  }
  setTimeout(() => document.body.removeChild(canvas), 1000);
}
