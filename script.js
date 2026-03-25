document.addEventListener("DOMContentLoaded", () => {

  // ===== FADE IN =====
  const elements = document.querySelectorAll(".fade-in");

  window.addEventListener("scroll", () => {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.classList.add("show");
      }
    });
  });

  // ===== CURSOR GLOW =====
  const glow = document.querySelector(".cursor-glow");

  window.addEventListener("mousemove", (e) => {
    if (glow) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    }
  });

  // ===== PROJECT TITLE GLOW =====
  const projectsTitle = document.querySelector(".projects-title");

  function triggerGlow() {
    if (!projectsTitle) return;

    projectsTitle.classList.remove("active-glow");
    void projectsTitle.offsetWidth;
    projectsTitle.classList.add("active-glow");
  }

  window.addEventListener("click", triggerGlow);
  window.addEventListener("touchstart", triggerGlow);

  // ===== 3D CARDS =====
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = -(y / rect.height - 0.5) * 10;
      const rotateY = (x / rect.width - 0.5) * 10;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
    });
  });

  
  // ===== TERMINAL BOOT =====
  const terminal = document.getElementById("terminal-text");

  if (terminal) {
    const lines = [
      "> Initializing core systems...",
      "> Loading neural interface...",
      "> Checking memory banks...",
      "> RAM status: OK",
      "> CPU cores: ONLINE",
      "> GPU acceleration: ENABLED",
      "> Establishing secure connection...",
      "> Encryption protocols: ACTIVE",
      "> Connecting to global network...",
      "> Access granted ✔",
      "> Booting AI assistant...",
      "> Loading engineering modules...",
      "> Compiling code environment...",
      "> Injecting system variables...",
      "> Calibrating sensors...",
      "> Activating user interface...",
      "> Welcome Mr Ian website.",
      "> System Ready 🚀"
    ];

    let lineIndex = 0;

    function typeLine() {
      if (lineIndex < lines.length) {
        terminal.innerHTML += lines[lineIndex] + "\n";
        lineIndex++;
        setTimeout(typeLine, 90);
      } else {
        setTimeout(() => {
          const boot = document.getElementById("boot-screen");
          if (boot) {
            boot.style.opacity = "0";
            setTimeout(() => {
              boot.style.display = "none";
            }, 800);
          }
        }, 800);
      }
    }

    typeLine();
  }

});