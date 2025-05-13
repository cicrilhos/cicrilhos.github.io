let segundos = 0;
let intervalo = null;
let vidas = 3;
let perdeu = false;
let pausado = false;
let faseAtual = 1;
let velocidadeAliens = 2;

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
  const tela = document.getElementById('tela-pause');
  tela.style.display = 'none';

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
  const nave = document.querySelector('.nave');

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
      
          setTimeout(() => {
            aliens.forEach(a => a.style.top = `-160px`);
            perdeu = false;
            iniciarContador();
          }, 2000);
        } else {
          mostrarMensagemTemporaria('GAME OVER');
        }
      
        return; // ⚠️ Impede múltiplas colisões no mesmo frame
      }      
    });
  }, 30);
}

function mostrarDerrotaTemporaria() {
  setTimeout(() => {
    const tela = document.getElementById('tela-pause');
    tela.style.display = 'none';
    pausado = false;

    // Reposiciona todos os aliens para a posição inicial
    reposicionarAliens();
    
    perdeu = false;
    iniciarContador();
  }, 2000);
}

function reposicionarAliens() {
  const aliens = [
    document.querySelector('.alien1'),
    document.querySelector('.alien2'),
    document.querySelector('.alien3')
  ];

  aliens.forEach(alien => {
    alien.style.display = 'block'; // Garante que todos os aliens estão visíveis
    alien.style.top = '-160px'; // Reposiciona os aliens para o topo
  });
}

function reiniciarJogo() {
  // Reseta as variáveis de estado
  vidas = 3;
  faseAtual = 1;
  velocidadeAliens = 2;
  pausado = false;
  perdeu = false;

  // Atualiza a tela de vida
  document.getElementById('vida').textContent = `LIFE: ${vidas}`;
  
  // Reposiciona todos os aliens
  reposicionarAliens();
  
  // Reseta o fundo da fase e o cronômetro
  document.body.style.backgroundImage = `url('images/background${faseAtual}.png')`;
  iniciarContador(); // Reinicia o contador

  // Garante que a nave e os mísseis estão na posição inicial
  const nave = document.querySelector('.nave');
  nave.style.left = '400px'; // Posição inicial da nave
  nave.style.top = '500px'; // Posição inicial da nave

  // Reposiciona os mísseis
  misseis.forEach(m => {
    m.elemento.style.top = '600px';
    m.elemento.style.left = '640px';
  });
}


function lancarMissil() {
  if (pausado || perdeu || vidas <= 0) return;

  const nave = document.querySelector('.nave');
  const posicaoNave = parseInt(getComputedStyle(nave).left) + 75;
  const topoNave = parseInt(getComputedStyle(nave).top);

  const missilDisponivel = misseis.find(m => !m.ativo);
  if (!missilDisponivel) return;

  const missil = missilDisponivel;
  missil.ativo = true;

  missil.elemento.style.left = `${posicaoNave}px`;
  missil.elemento.style.top = `${topoNave}px`;

  missil.intervalo = setInterval(() => {
    if (pausado) return;

    const posicaoAtual = parseInt(missil.elemento.style.top);
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

      const margem = 2; // Ajuste a margem para controle da proximidade da colisão
      const colidiu =
        missilRect.top + margem < alienRect.bottom &&
        missilRect.bottom - margem > alienRect.top &&
        missilRect.left + margem < alienRect.right &&
        missilRect.right - margem > alienRect.left;

      if (colidiu) {
        alien.style.display = 'none';
        resetarMissil(missil);
        verificarFimDeFase();
      }
    });
  }, 20);
}


function resetarMissil(missil) {
  clearInterval(missil.intervalo);
  missil.ativo = false;
  missil.elemento.style.top = '800px';
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

function mostrarMensagemTemporaria(texto) {
  pausado = true;
  clearInterval(intervalo);
  intervalo = null;

  const tela = document.getElementById('tela-pause');
  tela.textContent = texto;
  tela.style.display = 'flex';
}

window.onload = () => {
  document.getElementById('vida').textContent = `LIFE: ${vidas}`;
  document.getElementById('tela-pause').style.display = 'none';

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
