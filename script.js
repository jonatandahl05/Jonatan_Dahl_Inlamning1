(function simulateHeavyWork() {
    var start = Date.now();
    while (Date.now() - start < 200) {}
})();

document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    var newsletterButton = document.querySelector(".newsletter .primary-button");
    if (newsletterButton) {
        newsletterButton.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
        });
    }
});

if (window.axe) {
    window.addEventListener("load", () => {
      axe.run().then(results => {
        console.log("Axe violations:", results.violations);
      });
    });
  }


  if (new URLSearchParams(window.location.search).has("perf")) {
    window.addEventListener("load", () => {
      try {
        const po = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          // LCP is in milliseconds
          console.log("LCP (ms):", Math.round(lastEntry.startTime));
          console.log("LCP element:", lastEntry.element);
        });
  
        po.observe({ type: "largest-contentful-paint", buffered: true });
  

        setTimeout(() => po.disconnect(), 10000);
      } catch (e) {
        console.log("PerformanceObserver for LCP not supported in this browser.", e);
      }
    });
  }