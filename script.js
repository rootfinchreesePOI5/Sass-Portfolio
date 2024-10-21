let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Active link highlighting on scroll
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            navlinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the current section link
            let currentLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (currentLink) {
                currentLink.classList.add('active');
            }
        }
    });
};

// Toggle menu icon and navbar on click
menuIcon.onclick = () => {
    // Toggle the menu icon class between 'bx-menu' and 'bx-x' (if using Boxicons)
    menuIcon.classList.toggle('bx-x');

    // Toggle the navbar visibility
    navbar.classList.toggle('active');
};
