let segundos = 0;
let intervalo = null;
let vidas = 3;
let perdeu = false;
let pausado = false;
let faseAtual = 1;
let velocidadeAliens = 2;
let aliensDestruidos = 0; // ✅ contador de aliens destruídos

let misseis = [
  { ativo: false, elemento: document.getElementById('missil1'), intervalo: null },
  { ativo: false, elemento: document.getElementById('missil2'), intervalo: null }
];

function atualizarCronometro() {
  const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
  const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
  const seg = String(segundos % 60).padStart(2, '0');
  document.getElementById('tempo').textContent = `${horas}:${minutos}:${seg}`;
}

function iniciarContador() {
  if (intervalo !== null) return;

  pausado = false;
  document.getElementById('tela-pause').style.display = 'none';

  intervalo = setInterval(() => {
    segundos++;
    atualizarCronometro();
  }, 1000);
}

function pausarContador() {
  clearInterval(intervalo);
  intervalo = null;
  pausado = true;

  const tela = document.getElementById('tela-pause');
  tela.textContent = 'GAME PAUSED';
  tela.style.display = 'flex';
}

function controlarNave() {
  document.addEventListener('keydown', (event) => {
    if (pausado || perdeu || vidas <= 0) return;

    const nave = document.querySelector('.nave');
    const posicaoAtual = parseInt(getComputedStyle(nave).left);

    if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') {
      nave.style.left = `${posicaoAtual - 15}px`;
    }

    if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') {
      nave.style.left = `${posicaoAtual + 15}px`;
    }
  });
}

function MovimentoAlien() {
  const aliens = [
    document.querySelector('.alien1'),
    document.querySelector('.alien2'),
    document.querySelector('.alien3')
  ];

  setInterval(() => {
    if (perdeu || pausado || vidas <= 0) return;

    aliens.forEach(alien => {
      let posicaoAtual = parseInt(getComputedStyle(alien).top);
      alien.style.top = `${posicaoAtual + velocidadeAliens}px`;

      const alienBottom = posicaoAtual + 160;
      const limiteSuperiorNave = 560;

      if (alienBottom >= limiteSuperiorNave && !perdeu) {
        perdeu = true;
        vidas--;
        document.getElementById('vida').textContent = `LIFE: ${vidas}`;
        
        if (vidas > 0) {
          mostrarDerrotaTemporaria();
        } else {
          mostrarMensagemTemporaria('GAME OVER');
        }
         
        return;
      }
    });
  }, 30);
}

function mostrarMensagemTemporaria(texto) {
  pausado = true;
  clearInterval(intervalo);
  intervalo = null;

  const tela = document.getElementById('tela-pause');
  tela.textContent = texto;
  tela.style.display = 'flex';
}

function mostrarDerrotaTemporaria() {
  const tela = document.getElementById('tela-pause');
  tela.textContent = 'YOU LOSE';
  tela.style.display = 'flex';
  pausado = true;

  // Reposiciona os aliens imediatamente
  reposicionarAliens();

  setTimeout(() => {
    tela.style.display = 'none';
    pausado = false;
    perdeu = false;
    iniciarContador(); // Reinicia o contador de tempo
  }, 2000);
}

function reposicionarAliens() {
  const aliens = [
    document.querySelector('.alien1'),
    document.querySelector('.alien2'),
    document.querySelector('.alien3')
  ];

  aliens.forEach(alien => {
    // Reposiciona os aliens fora da tela (no topo)
    alien.style.display = 'block';
    alien.style.top = '-160px';  // Coloca os aliens fora da tela para iniciar novamente
  });
}

// Função para reiniciar o jogo com correção para o estado dos mísseis
function reiniciarJogo() {
  // Resetar variáveis
  vidas = 3;
  faseAtual = 1;
  velocidadeAliens = 2;
  pausado = false;
  perdeu = false;
  aliensDestruidos = 0;

  // Resetar elementos da UI
  document.getElementById('vida').textContent = `LIFE: ${vidas}`;
  document.body.style.backgroundImage = `url('images/background${faseAtual}.png')`;
  document.getElementById('inimigos').textContent = `ALIEN: ${aliensDestruidos}`;

  reposicionarAliens();
  iniciarContador();

  // Posicionar nave
  const nave = document.querySelector('.nave');
  nave.style.left = '400px';
  nave.style.top = '500px';

  // Resetar os mísseis: parar movimento, estado e posição
  misseis.forEach(m => {
    if (m.intervalo) {
      clearInterval(m.intervalo);
      m.intervalo = null;
    }
    m.ativo = false;

    // Posicionar o míssil no centro da nave, pronto para ser lançado
    const posicaoNaveX = parseInt(getComputedStyle(nave).left) + (nave.offsetWidth / 2) - (m.elemento.offsetWidth / 2);
    const posicaoNaveY = parseInt(getComputedStyle(nave).top) - m.elemento.offsetHeight; // um pouco acima da nave

    m.elemento.style.left = `${posicaoNaveX}px`;
    m.elemento.style.top = `${posicaoNaveY}px`;

    m.elemento.style.display = 'block'; // garantir que o míssil esteja visível e posicionado
  });

  // Atualizar UI dos inimigos
  document.getElementById('inimigos').textContent = `ALIEN: ${aliensDestruidos}`;
}

// Função para resetar o míssil, chamada quando o míssil sai da tela ou colide
function resetarMissil(missil) {
  if (missil.intervalo) {
    clearInterval(missil.intervalo);
    missil.intervalo = null;
  }
  missil.ativo = false;

  const nave = document.querySelector('.nave');
  const posicaoNaveX = parseInt(getComputedStyle(nave).left) + (nave.offsetWidth / 2) - (missil.elemento.offsetWidth / 2);
  const posicaoNaveY = parseInt(getComputedStyle(nave).top) - missil.elemento.offsetHeight;

  missil.elemento.style.left = `${posicaoNaveX}px`;
  missil.elemento.style.top = `${posicaoNaveY}px`;
  missil.elemento.style.display = 'block'; // garantir visibilidade
}

// Exemplo da função lancarMissil para contexto (não modificado)
// Função que inicia o movimento do míssil
function lancarMissil() {
  if (pausado || perdeu || vidas <= 0) return;

  const nave = document.querySelector('.nave');
  const posicaoNave = parseInt(getComputedStyle(nave).left) + (nave.offsetWidth / 2) - 20;
  const topoNave = parseInt(getComputedStyle(nave).top) - 80;

  const missilDisponivel = misseis.find(m => !m.ativo);
  if (!missilDisponivel) return;

  const missil = missilDisponivel;
  missil.ativo = true;

  missil.elemento.style.left = `${posicaoNave}px`;
  missil.elemento.style.top = `${topoNave}px`;
  missil.elemento.style.display = 'block';

  missil.intervalo = setInterval(() => {
    if (pausado || perdeu) return;

    let posicaoAtual = parseInt(missil.elemento.style.top);
    if (isNaN(posicaoAtual)) posicaoAtual = topoNave;

    if (posicaoAtual <= -100) {
      resetarMissil(missil);
      return;
    }

    missil.elemento.style.top = `${posicaoAtual - 10}px`;

    const aliens = [document.querySelector('.alien1'), document.querySelector('.alien2'), document.querySelector('.alien3')];
    const missilRect = missil.elemento.getBoundingClientRect();

    aliens.forEach(alien => {
      if (alien.style.display === 'none') return;

      const alienRect = alien.getBoundingClientRect();
      const margem = 2;

      const colidiu =
        missilRect.top + margem < alienRect.bottom &&
        missilRect.bottom - margem > alienRect.top &&
        missilRect.left + margem < alienRect.right &&
        missilRect.right - margem > alienRect.left;

      if (colidiu) {
        alien.style.display = 'none';

        aliensDestruidos++;
        document.getElementById('inimigos').textContent = `ALIEN: ${aliensDestruidos}`;

        resetarMissil(missil);
        verificarFimDeFase();
      }
    });
  }, 20);
}



function verificarFimDeFase() {
  const aliens = [
    document.querySelector('.alien1'),
    document.querySelector('.alien2'),
    document.querySelector('.alien3')
  ];

  const todosAbatidos = aliens.every(alien => alien.style.display === 'none');

  if (todosAbatidos) {
    faseAtual++;

    if (faseAtual > 4) {
      mostrarMensagemTemporaria('YOU WIN');
      return;
    }

    pausado = true;
    const tela = document.getElementById('tela-pause');
    tela.textContent = 'YOU WON';
    tela.style.display = 'flex';

    setTimeout(() => {
      velocidadeAliens += 1;
      document.body.style.backgroundImage = `url('images/background${faseAtual}.png')`;
      document.body.style.backgroundSize = 'cover';

      aliens.forEach(alien => {
        alien.style.display = 'block';
        alien.style.top = '-160px';
      });

      tela.style.display = 'none';
      pausado = false;
    }, 2000);
  }
}

window.onload = () => {
  document.getElementById('vida').textContent = `LIFE: ${vidas}`;
  document.getElementById('tela-pause').style.display = 'none';
  document.getElementById('inimigos').textContent = `ALIEN: ${aliensDestruidos}`;

  misseis.forEach(m => {
    m.elemento.style.top = '600px';
    m.elemento.style.left = '640px';
  });

  setInterval(() => {
    if (pausado || perdeu || vidas <= 0) return;

    const nave = document.querySelector('.nave');
    const naveTop = parseInt(getComputedStyle(nave).top);
    const naveLeft = parseInt(getComputedStyle(nave).left);

    misseis.forEach((missil, index) => {
      if (!missil.ativo) {
        const deslocamento = index === 0 ? 20 : 100;
        missil.elemento.style.left = `${naveLeft + deslocamento}px`;
        missil.elemento.style.top = `${naveTop}px`;
      }
    });
  }, 20);

  iniciarContador();
  controlarNave();
  MovimentoAlien();

  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'p') {
      pausarContador();
    } else if (event.key.toLowerCase() === 'r') {
      iniciarContador();
    } else if (event.code === 'Space') {
      lancarMissil();
    }
  });
};
