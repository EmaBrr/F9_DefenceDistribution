// Navigation

document.addEventListener("DOMContentLoaded", function () {
  const navHam = document.querySelector(".nav-ham");
  const navItems = document.querySelector(".nav-items");

  // Function to toggle the active class
  function toggleNav() {
    navHam.classList.toggle("active");
    // navItems.style.display = navHam.classList.contains('active') ? 'block' : 'none';
  }

  // Click event to toggle nav-ham
  navHam.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent the click from propagating to document
    toggleNav();
  });

  // Click event to remove active class when clicking anywhere else
  document.addEventListener("click", function () {
    if (navHam.classList.contains("active")) {
      navHam.classList.remove("active");
      navItems.style.display = "none";
    }
  });

  // Prevent clicking inside the nav items from closing the menu
  navItems.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

// Zoom out
function applyZoomEffect() {
  let startSize;
  let endSize;

  // Adjust the start and end sizes based on screen width
  if (window.innerWidth > 1200) {
    startSize = "130%"; // Larger start size for larger screens
    endSize = "110%"; // Larger end size for larger screens
  } else if (window.innerWidth > 1092) {
    startSize = "140%"; // Medium start size for medium screens
    endSize = "120%"; // Medium end size for medium screens
  } else if (window.innerWidth > 968) {
    startSize = "160%"; // Medium start size for medium screens
    endSize = "150%"; // Medium end size for medium screens
  } else if (window.innerWidth > 768) {
    startSize = "210%"; // Medium start size for medium screens
    endSize = "200%"; // Medium end size for medium screens
  } else if (window.innerWidth > 476) {
    startSize = "240%"; // Medium start size for medium screens
    endSize = "230%"; // Medium end size for medium screens
  } else {
    startSize = "300%"; // Smaller start size for smaller screens
    endSize = "290%"; // Smaller end size for smaller screens
  }

  // GSAP animation for the zoom-out effect using the calculated sizes
  gsap.fromTo(
    ".headline",
    {
      backgroundSize: startSize, // Dynamic start size based on screen width
      backgroundPosition: "center center", // Ensure the image stays centered
    },
    {
      backgroundSize: endSize, // Dynamic end size based on screen width
      duration: 2, // Duration of the animation in seconds
      ease: "power2.out", // Easing function for smooth animation
    }
  );
}

// Apply the zoom effect on initial load
window.addEventListener("load", applyZoomEffect);

// Reapply the zoom effect on screen resize
window.addEventListener("resize", applyZoomEffect);

// values
document.addEventListener('DOMContentLoaded', function () {
  var valueItems = document.querySelectorAll('.value-item');

  valueItems.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
          var content = item.querySelector('.value-overlay');
          var image = item.querySelector('.value-image');
          var title = item.querySelector('.value-title');

          content.style.opacity = '1'; // Show overlay
          image.style.opacity = '0.3'; // Darken image
          title.style.opacity = '0'; // Hide title
      });

      item.addEventListener('mouseleave', function() {
          var content = item.querySelector('.value-overlay');
          var image = item.querySelector('.value-image');
          var title = item.querySelector('.value-title');

          content.style.opacity = '0'; // Hide overlay
          image.style.opacity = '1'; // Restore image
          title.style.opacity = '1'; // Show title
      });
  });
});
