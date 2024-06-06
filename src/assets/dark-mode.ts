if(
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.documentElement.classList.add('dark');
    (document.querySelector('#theme-toggle-light-icon') as HTMLInputElement)?.classList.add('hidden');
    (document.querySelector('#nav-theme-toggle-light-icon') as HTMLInputElement)?.classList.add('hidden');
    (document.querySelector('#toggle-dark-mode') as HTMLInputElement)?.classList.add('float-right');
    (document.querySelector('#nav-toggle-dark-mode') as HTMLInputElement)?.classList.add('float-right');
} else {
    document.documentElement.classList.remove('dark');
    (document.querySelector('#theme-toggle-moon-icon') as HTMLInputElement)?.classList.add('hidden');
    (document.querySelector('#nav-theme-toggle-moon-icon') as HTMLInputElement)?.classList.add('hidden');
}