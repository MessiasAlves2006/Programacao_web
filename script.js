const hoje = new Date();
alert(`Data de hoje:${hoje}`);

const menuToggle = document.getElementById('menuToggle');
const seta = document.getElementById('arrow');
const offcanvas = document.getElementById('offcanvasScrolling');


function atualizarPosicaoBotao() {
    if (!menuToggle || !offcanvas) return;

    const estaAberto = offcanvas.classList.contains('show');
    const largura = getComputedStyle(offcanvas).width || '0px';
    seta.className = estaAberto ? 'carousel-control-prev-icon' : 'carousel-control-next-icon';

    menuToggle.style.left = estaAberto ? `calc(${largura} + 1rem)` : '1rem';
}

if (menuToggle && offcanvas) {
    atualizarPosicaoBotao();
    offcanvas.addEventListener('shown.bs.offcanvas', atualizarPosicaoBotao);
    offcanvas.addEventListener('hidden.bs.offcanvas', atualizarPosicaoBotao);
    window.addEventListener('resize', atualizarPosicaoBotao);
}

function podeComprar(){

let nome = document.getElementById("nome").value;
let email = document.getElementById("mail").value;
let nasc = new Date(document.getElementById("datanasc").value);
let diferenca = hoje.getFullYear() - nasc.getFullYear();
let mesAtual = hoje.getMonth();
let mesNasc = nasc.getMonth();
if (mesAtual < mesNasc || (mesAtual === mesNasc && hoje.getDate() < nasc.getDate())) {
    diferenca--;
}
if (diferenca>=18){
    alert(`Olá, ${nome} dono do email ${email} que tem ${diferenca} anos, você pode comprar!`);
}
else{
    alert(`Olá, ${nome} dono do email ${email} que tem ${diferenca} anos, você não pode comprar!`);
}

}
