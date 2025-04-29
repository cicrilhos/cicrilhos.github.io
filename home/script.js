function alternarMenu() {
    const menu = document.getElementById('menu');
    const estiloAtual = window.getComputedStyle(menu).display;

    if (estiloAtual === 'none') {
        menu.style.display = 'flex'; // Exibe o menu
        menu.style.height = 'auto'; // Ajusta a altura para ocupar espaço
    } else {
        menu.style.display = 'none'; // Esconde o menu
        // Remover a linha abaixo, pois não é necessária
        // menu.style.height = '0'; // Remove o espaço ocupado
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('welcomeModal');
    const startButton = document.getElementById('startButton');
    const audio = document.getElementById('audioPlayer');
    audio.volume = 0.3;

    startButton.addEventListener('click', function () {
        modal.style.display = 'none';
        audio.play();
    });
});
