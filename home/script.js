function alternarMenu() {
    const menu = document.getElementById('menu-lateral');
    const estiloAtual = window.getComputedStyle(menu).display;

    if (estiloAtual === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
