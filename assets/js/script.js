document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("current-date").innerHTML = new Date().getFullYear();

    const loader = document.getElementById("loader")
    setTimeout(() => {
        loader.classList.remove("show");
    }, 1000);

    let url = location.pathname;
    const navLinkClasses = document.querySelectorAll('.nav-link');

    if(url === '/about') {
        removeActiveFromMenuLinks();
        document.getElementById('about-link').classList.add('active');
        document.getElementById('sm-about-link').classList.add('active');
    } else if(url === '/dental-and-medical-it') {
        removeActiveFromMenuLinks();
        activeServicesMenuLinks();
        document.getElementById('sm-medical-link').classList.add('active');
        document.getElementById('medical-link').classList.add('active');
    } else if(url === '/web-development') {
        removeActiveFromMenuLinks();
        activeServicesMenuLinks();
        document.getElementById('sm-web-link').classList.add('active');
        document.getElementById('web-link').classList.add('active');
    } else if(url === '/machine-learning') {
        removeActiveFromMenuLinks();
        activeServicesMenuLinks();
        document.getElementById('sm-machine-link').classList.add('active');
        document.getElementById('machine-link').classList.add('active');
    } else if(url === '/digital-marketing') {
        removeActiveFromMenuLinks();
        activeServicesMenuLinks();
        document.getElementById('sm-digital-link').classList.add('active');
        document.getElementById('digital-link').classList.add('active');
    } else if(url === '/smart-home') {
        removeActiveFromMenuLinks();
        activeServicesMenuLinks();
        document.getElementById('sm-smart-link').classList.add('active');
        document.getElementById('smart-link').classList.add('active');
    } else if(url === '/contact-us') {
        removeActiveFromMenuLinks();
        document.getElementById('contact-link').classList.add('active');
        document.getElementById('sm-contact-link').classList.add('active');
    } else if(url === '/assistance-hub') {
        removeActiveFromMenuLinks();
        document.getElementById('assistance-link').classList.add('active');
        document.getElementById('sm-assistance-link').classList.add('active');
    } else if(url === '/emr-development') {
        removeActiveFromMenuLinks();
        activeServicesMenuLinks();
        document.getElementById('emr-link').classList.add('active');
        document.getElementById('sm-emr-link').classList.add('active');
    }

    const smMenuBtn = document.getElementById("sm-navbar-btn");
    const burgerIcon = document.getElementById("burger-icon");
    const smMenu = document.getElementById("sm-menu");
    let smMenuIsOpen = false;

    smMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(smMenuIsOpen == false) {
            burgerIcon.classList.add('active');
            smMenu.classList.add('show');
            smMenuIsOpen = true;
        } else {
            burgerIcon.classList.remove('active');
            smMenu.classList.remove('show');
            smMenuIsOpen = false;
        }
    });


    const navBar = document.querySelector('.main-navbar');
    window.onscroll = () => {
        let scrollPos = window.scrollY  || document.documentElement.scrollTop;
        if(scrollPos > 75) {
            navBar.style.background = '#ffffff';
            navBar.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
        } else {
            navBar.style.background = 'transparent';
            navBar.style.boxShadow = 'none';
        } 
    }

    function removeActiveFromMenuLinks() {
        navLinkClasses.forEach(el => {
            el.classList.remove('active');
        });
    }

    function activeServicesMenuLinks() {
        document.getElementById('services-dropdown-link').classList.add('active');
        document.getElementById('services-accordion-sm-btn').classList.remove('collapsed');
        document.getElementById('services-accordion-sm-btn').classList.add('active');
        document.getElementById('collapseServices').classList.add('show');
    }


    const textAnchors = document.querySelectorAll('.text-anchor');

    setInterval(() => {
        textAnchors.forEach(el => {
            if(el.style.opacity == '0') {
                el.style.opacity = '1';
            } else {
                el.style.opacity = '0';
            }
        });
    }, 350);
});

