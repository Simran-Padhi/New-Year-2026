// Get the name from the URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

// When the envelope image is clicked, redirect to the wish page
document.getElementById("letterImage").addEventListener("click", () => {
  // Redirect to wish.html with the name in the URL
  window.location.href = `wish.html?name=${encodeURIComponent(name)}`;
});