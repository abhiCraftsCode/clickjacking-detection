console.log("Victim JS loaded");

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("victim_btn");
  if (btn) {
    console.log("Button found in DOM.");
    btn.addEventListener("click", function () {
      alert("You changed your settings!");
    });
  } else {
    console.log("Victim button not found.");
  }
});
