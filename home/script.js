function alternarMenu(){
    const menu = document.getElementById('menu-lateral');
    if(menu.style.visibility === 'hidden' || menu.style.visibility === null){
        menu.style.visibility = 'visible';
    } else {
        menu.style.visibility = 'hidden';
    }
}