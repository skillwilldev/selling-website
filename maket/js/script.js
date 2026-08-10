document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav__list');
    const body = document.body;


    function closeModal() {
        burger.classList.remove('open');
        body.classList.remove('menu');
    }

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        body.classList.toggle('menu');
    });

    body.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.closest('.burger') && !target.closest('.nav__list')) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.keyCode === 27) {
            closeModal();
        }
    })
});