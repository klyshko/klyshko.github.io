(function () {
  var MOBILE_MAX = 640;
  var nav = document.getElementById("site-nav");
  var burger = document.getElementById("site-nav-burger");
  if (!nav || !burger) return;

  var vlinks = nav.querySelector(".visible-links");
  var hlinks = nav.querySelector(".hidden-links");
  var openClass = "site-nav--open";
  var noop = function () {};

  /**
   * Main.min.js registers greedy nav (updateNav) that moves <li> into .hidden-links.
   * _iso-style.scss hides .hidden-links and the overflow button, so any overflow looks
   * like a blank nav. This site has few top links — keep them all in .visible-links
   * and never run the stock updateNav; mobile layout is handled in CSS (burger + row wrap).
   */
  function mergeNavItemsToVisible() {
    if (!vlinks || !hlinks) return;
    var items = hlinks.querySelectorAll("li");
    for (var i = items.length - 1; i >= 0; i--) {
      vlinks.appendChild(items[i]);
    }
  }

  function disableGreedyRelocate() {
    mergeNavItemsToVisible();
    window.updateNav = noop;
  }

  function isMobile() {
    return window.innerWidth <= MOBILE_MAX;
  }

  function setOpen(open) {
    if (open) {
      nav.classList.add(openClass);
    } else {
      nav.classList.remove(openClass);
    }
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  function isOpen() {
    return nav.classList.contains(openClass);
  }

  burger.addEventListener("click", function (e) {
    e.preventDefault();
    if (!isMobile()) return;
    setOpen(!isOpen());
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen() && isMobile()) setOpen(false);
  });

  document.addEventListener("click", function (e) {
    if (!isOpen() || !isMobile()) return;
    if (nav.contains(e.target)) return;
    setOpen(false);
  });

  if (vlinks) {
    vlinks.addEventListener("click", function (e) {
      if (e.target && e.target.tagName === "A" && isMobile() && isOpen()) {
        setOpen(false);
      }
    });
  }

  var resizeT;
  window.addEventListener("resize", function () {
    clearTimeout(resizeT);
    resizeT = setTimeout(function () {
      disableGreedyRelocate();
      if (!isMobile()) setOpen(false);
    }, 100);
  });

  function init() {
    disableGreedyRelocate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
