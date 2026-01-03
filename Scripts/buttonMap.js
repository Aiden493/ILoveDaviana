document.addEventListener("DOMContentLoaded", () => {

    const screens = document.querySelectorAll(
        '#mainScreen, #secondScreen, #thirdScreen, #finalScreen'
    );

    function showScreen(id) {
        screens.forEach(screen => screen.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
    }

    document.getElementById('nextPage')
        .addEventListener('click', () => showScreen('secondScreen'));

    document.getElementById('nextPage2')
        .addEventListener('click', () => showScreen('thirdScreen'));

    document.getElementById('nextPage3')
        .addEventListener('click', () => showScreen('finalScreen'));

    document.querySelectorAll('.back-btn')
        .forEach(btn => btn.addEventListener('click', () => showScreen('mainScreen')));
});
