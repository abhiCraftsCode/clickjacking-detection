chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.scripting.executeScript(
    {
      target: { tabId: tabs[0].id },
      func: () => {
        const iframes = document.getElementsByTagName("iframe");
        if (iframes.length === 0) return "❌ No iframes on this page.";
        let clickjacked = false;
        for (let iframe of iframes) {
          try {
            if (
              iframe.contentWindow &&
              iframe.contentWindow.top !== iframe.contentWindow.self
            ) {
              clickjacked = true;
            }
          } catch (e) {
            // Cross-origin iframe, assume safe for now or log warning
          }
        }
        return clickjacked
          ? "⚠️ Clickjacking Detected: An iframe is framing another page."
          : "✅ No clickjacking detected.";
      },
    },
    (results) => {
      if (chrome.runtime.lastError) {
        document.getElementById("status").textContent =
          "⚠️ Error: " + chrome.runtime.lastError.message;
      } else {
        document.getElementById("status").textContent = results[0].result;
      }
    }
  );
});
