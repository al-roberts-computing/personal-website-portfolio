// open or close accessibility menu
const toggleAccessibilityMenu = document.querySelector('#accessibility-menu-btn') as HTMLInputElement;

if(toggleAccessibilityMenu instanceof HTMLInputElement) {
    toggleAccessibilityMenu.onclick = () => {
        (document.querySelector('#accessibility-menu') as HTMLInputElement)?.classList.toggle('w-24');
        (document.querySelector('#open-accessibility-arrow-icon') as HTMLInputElement)?.classList.toggle('hidden');
        (document.querySelector('#close-accessibility-xmark-icon') as HTMLInputElement)?.classList.toggle('hidden');
    };
}

// hamburger menu state tracker
const toggleMenu = document.querySelector('#toggle-menu') as HTMLInputElement;
const accessibilityBtn = document.querySelector('#accessibility-menu-btn') as HTMLInputElement;

if(toggleMenu instanceof HTMLInputElement) {
    toggleMenu.onclick = () => {
        toggleMenu?.classList.toggle('hamburger-toggle');
    };
}

// reset navbar and accessibility menus upon window resize
window.addEventListener('resize', function() {
    if(toggleMenu instanceof HTMLInputElement) {
        if (toggleMenu?.classList.contains('hamburger-toggle')) {
            toggleMenu.click();
        }
    }
    if ((document.querySelector('#close-accessibility-xmark-icon') as HTMLInputElement)?.classList.contains('hidden') === false) {
        accessibilityBtn.click();
    }
});

// scroll back to top
const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const to_top = document.querySelector('#to-top-btn') as HTMLInputElement;

if(to_top instanceof HTMLInputElement) {
    to_top.addEventListener('click', function() {
        topFunction();
    });
}