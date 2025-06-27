// Burger menus
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded');
    console.log('main.js is loaded');

    // Burger menu logic
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');
    console.log('Burger elements:', burger);
    console.log('Menu elements:', menu);

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('d-none');
                }
            });
        }
    }

    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');
    console.log('Close elements:', close);
    console.log('Backdrop elements:', backdrop);

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('d-none');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('d-none');
                }
            });
        }
    }

    // Navbar fetch logic
    const navbarPlaceholder = document.querySelector('#navbar-placeholder');
    if (navbarPlaceholder) {
        console.log('Navbar placeholder found');
        fetch('/navbar.html')
            .then(response => {
                console.log('Fetch response:', response);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                console.log('HTML fetched:', html);
                navbarPlaceholder.innerHTML = html;
            })
            .catch(err => console.error('Error loading navbar:', err));
    } else {
        console.error('Navbar placeholder not found');
    }
});
