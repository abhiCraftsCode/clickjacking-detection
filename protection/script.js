document.querySelector(".interaction").addEventListener("click", function (e) {
  if (!protected()) return;
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
// Detection Method 1: Check if the page is inside an iframe
function detectIframeEmbedding() {
  if (window.top !== window.self) {
    console.warn("⚠️ Detected iframe embedding (Clickjacking warning)");
    const userChoice = confirm(
      "⚠️ Possible clickjacking attack.\n\nDo you want to go to the original site?"
    );
    //detection + prevention by blocking or exposing.
    if (userChoice) {
      // Burst out of the iframe to show real site
      alert("Moving to the Original site.");
      window.top.location = window.location.href;
    } else {
      // Block interaction on current page
      alert("Functionality of current page is blocked.");
      document.body.innerHTML =
        "<h1 style='color: red;'>Clickjacking attempt detected. Access blocked.</h1>";
    }
  }
}
// Detection Method 2: Check if the iframe has suspicious styling
function detectInvisibleIframe() {
  const iframeEl = window.frameElement; //if iframe exists
  if (iframeEl) {
    const styles = window.getComputedStyle(iframeEl);
    const opacity = parseFloat(styles.opacity);
    const pointerEvents = styles.pointerEvents;
    if (opacity < 0.1 || pointerEvents === "none") {
      alert("⚠️ Suspicious iframe styling detected.");
      return true;
      //only detecting no prevention
    }
  }
}
/*protection*/
function protected() {
  if (detectInvisibleIframe()) {
    detectIframeEmbedding();
    return false;
  }
  return true;
}
