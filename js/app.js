// Mobile Nav Menu Functionality
const mobileNav = document.querySelector('.nav-menu__mobile-wrapper');

document.querySelectorAll('.mobile-menu__open-close').forEach((i) => {
    i.addEventListener('click', () => {
        if(mobileNav.classList.contains('remove-mobile-menu')) {
            mobileNav.classList.remove('remove-mobile-menu');
            document.body.style.overflow = 'hidden';
        } else {
            mobileNav.classList.add('remove-mobile-menu');
            document.body.style.overflow = '';
        }
    })
})


