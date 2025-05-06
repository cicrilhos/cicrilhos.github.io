let segundos = 0;
let intervalo = null;

function atualizarCronometro() {
  const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
  const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
  const seg = String(segundos % 60).padStart(2, '0');
  document.getElementById('tempo').textContent = `${horas}:${minutos}:${seg}`;
}

function iniciarContador() {
  if (intervalo !== null) return;  
  intervalo = setInterval(() => {
    segundos++;
    atualizarCronometro();
  }, 1000);
}

function pausarContador() {
  clearInterval(intervalo);
  intervalo = null;
}

function esquerda() {
  document.addEventListener('keydown', (event) => {  // Corrigido aqui: removi o parêntese extra
    if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') {
      const nave = document.querySelector('.nave');
      const posicaoAtual = parseInt(getComputedStyle(nave).left);
      const novaPosicao = posicaoAtual - 15;
      nave.style.left = `${novaPosicao}px`;
    }
  });
}

function direita() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') {
      const nave = document.querySelector('.nave');
      const posicaoAtual = parseInt(getComputedStyle(nave).left);
      const novaPosicao = posicaoAtual + 15;
      nave.style.left = `${novaPosicao}px`;
    }
  });
}

window.onload = () => {
  iniciarContador();
  esquerda();
  direita();  // Agora adicionamos a função direita também.
  
  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'p') {
      pausarContador();
    } else if (event.key.toLowerCase() === 'r') {
      iniciarContador();
    }
  });
};
