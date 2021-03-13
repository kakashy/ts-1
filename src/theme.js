const themeToggle = document.getElementById('theme-toggle')
const slider = document.getElementById('slider')
const body = document.body;
const theme = localStorage.getItem('theme')

if (theme) {
     if(theme=='dark'){
        // window.getComputedStyle(document.querySelector('.slide'), ':before').style.setProperty('transform', 'translateX(16px)')
     }
    body.classList.add(theme);

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