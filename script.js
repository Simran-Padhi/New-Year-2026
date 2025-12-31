// Select all elements with the class "profile"
document.querySelectorAll(".profile").forEach((btn) => {
  
  // Add a click event listener to each profile button
  btn.addEventListener("click", () => {
    const name = btn.dataset.name; // Get the name stored in data-name attribute
    showWish(name);                // Call function to display the wish
  });
});

// Function to display the New Year wish
function showWish(name) {
    // Simple confetti burst animation
function confettiBurst() {
  const duration = 1000; // how long confetti spawns (ms)
  const end = Date.now() + duration;
  const colors = ["#ff5f6d", "#ffc371", "#5ffbf1", "#38ef7d", "#ffd700"];

  function createPiece() {
    const piece = document.createElement("div");
    piece.style.position = "fixed";
    piece.style.top = "-10px";
    piece.style.left = Math.random() * 100 + "vw"; // random horizontal position
    piece.style.width = "8px";
    piece.style.height = "12px";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.opacity = "0.9";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.borderRadius = "2px";
    piece.style.zIndex = "9999";
    document.body.appendChild(piece);

    // Animate falling down
    const fall = piece.animate(
      [
        { transform: piece.style.transform, top: "-10px" },
        { transform: `rotate(${Math.random() * 360}deg)`, top: "100vh" }
      ],
      { duration: 1200 + Math.random() * 800, easing: "ease-out" }
    );

    fall.onfinish = () => piece.remove();
  }

  // Keep spawning confetti until time runs out
  const tick = () => {
    createPiece();
    if (Date.now() < end) requestAnimationFrame(tick);
  };
  tick();
}
  const msg = document.getElementById("message"); // Find the message box
  const year = new Date().getFullYear();  
   if (name === "Roshan & Anjali") {
    msg.textContent = `🎇 Happy New Year Omii. Happy New Year Gudlii. Happy 2026 !!🎇🎉\n— With love,Bubblee didi`;
     confettiBurst(); // Call a fun animation function

  } else if (name === "Khushi & Krishu") {
    msg.textContent = `🎆 Happy New Year Khushi. Happy New Year Krishu. Happy 2026 !!🎆🎉\n— With love,Bubblee didi`;
     confettiBurst(); // Call a fun animation function

  }

}
// Step 1: Click profile → show letter
document.querySelectorAll(".profile").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    showLetter(name);
  });
});

function showLetter(name) {
  const letter = document.getElementById("letter");
  letter.classList.remove("hidden"); // show the letter popup
  letter.dataset.name = name;        // store whose profile was clicked
}


function openLetter(name) {
  // Redirect to letter.html with the name in the URL
  window.location.href = `letter.html?name=${encodeURIComponent(name)}`;
}
        // Get the current year automatically
  
