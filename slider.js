document.querySelector('.burger').addEventListener('click', function () {
    const burger = this;
    const isOpen = burger.getAttribute('data-burger-open') === 'true';

    burger.setAttribute('data-burger-open', !isOpen);
    burger.setAttribute('aria-expanded', !isOpen);
});

const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.side-menu');
const body = document.body;

burger.addEventListener('click', () => {
    const isOpen = sideMenu.classList.contains('open');
    
    if (isOpen) {
        sideMenu.classList.remove('open');
        body.classList.remove('body-lock'); /* Разблокировать страницу */
        burger.setAttribute('aria-expanded', 'false');
    } else {
        sideMenu.classList.add('open');
        body.classList.add('body-lock'); /* Блокировать прокрутку страницы */
        burger.setAttribute('aria-expanded', 'true');
    }
});
