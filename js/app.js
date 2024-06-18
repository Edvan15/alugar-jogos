//criar uma função para puxar a funcionalidade dos botões/junto com o ID que cada jogo no código html tem
function alterarStatus(id) {
//criar variaveis para puxar o id de cada jogo 
let gameClicado = document.getElementById(`game-${id}`);
//mudar a imagem e o botão caso o jogo for alugado/querySelector serve para puxar um elemento dentro do "gameClicado"/ o "." serve para procurar um elemento com classe
let imagem = gameClicado.querySelector('.dashboard__item__img');
let botao = gameClicado.querySelector('.dashboard__item__button');
//clasList serve para ver uma lista de classe e "contains" server para ver se essa lista de classe contem determinada coisa
if(imagem.classList.contains('dashboard__item__img--rented')) {
   imagem.classList.remove('dashboard__item__img--rented');
   botao.classList.remove('dashboard__item__button--return');
   botao.textContent = "Alugar";

}else {
    imagem.classList.add('dashboard__item__img--rented');
    botao.textContent = "Devolver";
    botao.classList.add('dashboard__item__button--return');
}
}