window.onload = () => {
    const input = document.querySelector('.theme-switch-input');
    input.onchange = (e) => {
        if (input.checked) {
            document.querySelectorAll('img').forEach(element => {
                console.log(element.src);
                element.src = element.src.replace('_light', '');
                console.log(element.src);
            })
            setProp('--text', '#201E1C');
            setProp('--background', '#E5D2BC');
            setProp('--border', '2px solid #201E1C')
        } else {
            document.querySelectorAll('img').forEach(element => {
                console.log(element.src);
                element.src = element.src.replace('.svg', '_light.svg');
                console.log(element.src);
            })
            setProp('--text', '#E5D2BC');
            setProp('--background', '#201E1C');
            setProp('--border', '2px solid #E5D2BC')
        }
    }
}

function setProp(propName, value) {
    document.documentElement.style.setProperty(propName, value);
}

const burgerBtn = document.querySelector('.burger-icon')
const nav = document.querySelector('nav');
const closeNav = document.querySelector('.nav-close-button')

burgerBtn.addEventListener('click', (e) => {
    nav.style.display = 'flex';
    nav.classList.add('nav-active');
    closeNav.style.display = 'block';
})

closeNav.addEventListener('click', (e) => {
    nav.classList.remove('nav-active');
    closeNav.style.display = '';
    nav.style.display = '';
})