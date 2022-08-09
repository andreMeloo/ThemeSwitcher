window.addEventListener('load', () => {
    const userTheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (localStorage.length > 0) {
        const key = localStorage.key(0);
        const themeLocal = localStorage.getItem(key)

        themeLocal == 'dark' ? document.querySelector('body').classList.add('theme_dark') & document.querySelector('.toggle').classList.add(themeLocal) : document.querySelector('body').classList.add('theme_light') & document.querySelector('.toggle').classList.add(themeLocal);
    } else {
        if (userTheme.matches) {
            document.querySelector('body').classList.add('theme_dark');
            document.querySelector('.toggle').classList.add('dark')
            document.querySelector('.toggle').classList.contains('light') ? document.querySelector('.toggle').classList.remove('light') : null;
        } else {
            document.querySelector('body').classList.add('theme_light');
            document.querySelector('.toggle').classList.add('light')
            document.querySelector('.toggle').classList.contains('dark') ? document.querySelector('.toggle').classList.remove('dark') : null;
        }
    }
})

const switchTheme = () => {
    if (document.querySelector('.toggle').classList.contains('light')) {
        document.querySelector('.toggle').classList.remove('light')
        document.querySelector('body').classList.remove('theme_light')
        document.querySelector('body').classList.add('theme_dark');
        document.querySelector('.toggle').classList.add('dark')
        localStorage.setItem('theme', 'dark');
    } else {
        document.querySelector('.toggle').classList.remove('dark')
        document.querySelector('body').classList.remove('theme_dark')
        document.querySelector('body').classList.add('theme_light');
        document.querySelector('.toggle').classList.add('light')
        localStorage.setItem('theme', 'light');
    }
}

