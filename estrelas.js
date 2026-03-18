    let podeCriar = true;

    document.addEventListener("mousemove", function(e) {

      if (!podeCriar) return;

      podeCriar = false;

      const star = document.createElement("span");
      star.innerHTML = "★";

      star.style.position = "fixed";
      star.style.left = e.clientX + "px";
      star.style.top = e.clientY + "px";

      star.style.color = "#ff4fa3";
      star.style.fontSize = "14px";
      star.style.pointerEvents = "none";

      star.style.transition = "all 0.8s ease";

      document.body.appendChild(star);

      setTimeout(() => {
        star.style.opacity = "0";
        star.style.transform = "translateY(-15px) scale(1.3)";
      }, 10);

      setTimeout(() => {
        star.remove();
      }, 800);

      setTimeout(() => {
        podeCriar = true;
      }, 15);

    });