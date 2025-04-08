
function carrossel(nomeGrupo, totalSlides, intervalo = 4000) {
    let atual = 1;

    setInterval(() => {
        
        atual++;
        if (atual > totalSlides) {
            atual = 1;
        }

        
        const radio = document.getElementById(`${nomeGrupo}-${atual}`);
        if (radio) {
            radio.checked = true;
        }
    }, intervalo);
}

document.addEventListener('DOMContentLoaded', () => {
    carrossel('slide1', 6); 
    carrossel('slide2', 6); 
    carrossel('slide3', 4);
});


window.addEventListener('DOMContentLoaded', () => {
    alert('Bem-vindo ao nosso site de CS2! Aproveite a visita 🎮');
});

window.addEventListener('DOMContentLoaded', () => {
    const botaoTopo = document.getElementById('voltar-topo');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            botaoTopo.style.display = 'block';
        } else {
            botaoTopo.style.display = 'none';
        }
    });

    botaoTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

const titulo = document.getElementById('titulo-jogo');
let visivel = true;

document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo-jogo');
    let visivel = true;

    setInterval(() => {
        visivel = !visivel;
        titulo.style.opacity = visivel ? '1' : '0';
    }, 4000); 
});
