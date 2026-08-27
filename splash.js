var splashFadeDelayMs = 220;
var splashFadeDurationMs = 900;

window.addEventListener("flutter-first-frame", function () {
  var splash = document.getElementById("launch-splash");
  if (!splash) {
    return;
  }

  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      window.setTimeout(function () {
        splash.classList.add("is-hidden");
        window.setTimeout(function () {
          splash.remove();
        }, splashFadeDurationMs + 40);
      }, splashFadeDelayMs);
    });
  });
});
