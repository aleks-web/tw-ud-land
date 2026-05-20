window.openMobileMenu = () => {
    document.body.classList.add('mobile-menu-open');
    const menuBtn = document.getElementById('mobile-menu-btn');
    menuBtn.classList.add('active');
}

window.closeMobileMenu = () => {
    document.body.classList.remove('mobile-menu-open');
    const menuBtn = document.getElementById('mobile-menu-btn');
    menuBtn.classList.remove('active');
}

window.toggleMobileMenu = () => {
    if (document.body.classList.contains('mobile-menu-open')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
});