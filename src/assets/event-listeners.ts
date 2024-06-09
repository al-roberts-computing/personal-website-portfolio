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