const themeToggle = document.getElementById('theme-toggle')
const body = document.body;
const theme = localStorage.getItem('theme')

if (theme) {
    body.classList.add(theme)
}

themeToggle.addEventListener('click', () => {
    if (body.classList == 'light') {
        body.classList.replace('light','dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark','light');
        localStorage.setItem('theme', 'light');
    }
})