document.addEventListener("DOMContentLoaded", () => {

    const screens = {
        main: document.getElementById('mainScreen'),
        secondScreen: document.getElementById('secondScreen'),
        thirdScreen: document.getElementById('thirdScreen'),
        finalScreen: document.getElementById('finalScreen')
    };

    function showScreen(screenName) {
        Object.values(screens).forEach(screen => {
        screen.style.display = 'none';
    });

    screens[screenName].style.display = 'block';
}



    document.getElementById('nextPage').addEventListener('click', () => {
        showScreen('secondScreen');
    });

    document.getElementById('nextPage2').addEventListener('click', () => {
        showScreen('thirdScreen');
    });

    document.getElementById('nextPage3').addEventListener('click', () => {
        showScreen('finalScreen');
    });

    document.querySelectorAll('.back-btn').forEach(button => {
        button.addEventListener('click', () => showScreen('main'));
    });
});
