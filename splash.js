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
        }, 430);
      }, 60);
    });
  });
});
