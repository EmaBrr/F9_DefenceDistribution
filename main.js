document.addEventListener('DOMContentLoaded', function () {
    const navHam = document.querySelector('.nav-ham');
    const navItems = document.querySelector('.nav-items');

    // Function to toggle the active class
    function toggleNav() {
        navHam.classList.toggle('active');
        // navItems.style.display = navHam.classList.contains('active') ? 'block' : 'none';
    }

    // Click event to toggle nav-ham
    navHam.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent the click from propagating to document
        toggleNav();
    });

    // Click event to remove active class when clicking anywhere else
    document.addEventListener('click', function () {
        if (navHam.classList.contains('active')) {
            navHam.classList.remove('active');
            navItems.style.display = 'none';
        }
    });

    // Prevent clicking inside the nav items from closing the menu
    navItems.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});
