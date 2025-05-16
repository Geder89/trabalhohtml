
const container = document.getElementById('container');


const botao = document.createElement('button');
botao.textContent = 'Clique para ver uma mensagem!';
container.appendChild(botao);


const mensagemDiv = document.createElement('div');
container.appendChild(mensagemDiv);


botao.addEventListener('click', () => {
    mensagemDiv.textContent = 'Você é capaz de conquistar seus objetivos!';
});