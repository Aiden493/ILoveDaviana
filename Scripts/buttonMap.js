document.getElementById('nextPage1').addEventListener('click', function() {
    document.getElementById('mainScreen').classList.add('hidden');
    document.getElementById('secondScreen').classList.remove('hidden');
});

document.getElementById('backButton').addEventListener('click' , function() {
    document.getElementById('secondScreen').classList.add('hidden');
    document.getElementById('mainScreen').classList.remove('hidden');
});