document.querySelector(".interaction").addEventListener("click", function (e) {
  const btn = e.target.closest("button");
  if (!btn) return;
  // Ensure the clicked element is a button
  if (btn.tagName !== "BUTTON") return;
  const id = btn.id;
  // Common pop animation
  btn.classList.add("pop");
  btn.addEventListener("animationend", function removePop() {
    btn.classList.remove("pop");
    btn.removeEventListener("animationend", removePop);
  });
  // Handle buttons by ID
  if (id === "like_btn") {
    like(btn);
  }
});
function like(btn) {
  btn.classList.toggle("liked");
  if (btn.classList.contains("liked")) {
    btn.textContent = "❤️ Liked";
    console.log("Thanks for liking the blog.");
  } else {
    btn.textContent = "👍 Like";
  }
}
