const hoje = new Date();
alert(`Data de hoje:${hoje}`);

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
