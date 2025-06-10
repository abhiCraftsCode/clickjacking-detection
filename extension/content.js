if (window.top !== window.self) {
  console.warn("⚠️ Clickjacking detected: This page is inside a frame.");
  //alert("⚠️ Clickjacking Attack Detected.");
  // The page is being loaded inside an iframe
  document.body.innerHTML = `
    <div style="position:fixed;top:0;left:0;right:0;bottom:0;
                background:red;color:white;z-index:9999;
                display:flex;align-items:center;justify-content:center;
                font-size:24px;">
      ⚠️ Clickjacking Attempt Detected: This page is embedded in a frame!
    </div>`;
}
