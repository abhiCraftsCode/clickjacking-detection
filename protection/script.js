//Performing clickjacking
document.getElementById("victim_btn").addEventListener("click", rate);
function rate() {
  alert("Thanks for your rating!");
}
// Detection Method 1: Check if the page is inside an iframe
function detectIframeEmbedding() {
  if (window.top !== window.self) {
    console.warn("⚠️ Detected iframe embedding (Clickjacking warning)");
    const userChoice = confirm(
      "⚠️ This page is being displayed in a suspicious way (possible clickjacking).\n\nDo you want to go to the original site?"
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
//uncomment the next line to run detection method
//detectIframeEmbedding();

// Detection Method 2: Check if the iframe has suspicious styling
function detectInvisibleIframe() {
  const iframeEl = window.frameElement; //if iframe exists
  if (iframeEl) {
    const styles = window.getComputedStyle(iframeEl);
    const opacity = parseFloat(styles.opacity);
    const pointerEvents = styles.pointerEvents;
    if (opacity < 0.1 || pointerEvents === "none") {
      alert("⚠️ Suspicious iframe styling detected. Possible clickjacking.");
      //only detecting no prevention
    }
  }
}
//detectInvisibleIframe(); //uncomment to run
