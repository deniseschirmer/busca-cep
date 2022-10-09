const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const infos = document.querySelector('.infos');


btnCep.addEventListener('click',handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body => { 
        infos.innerText = body;
    })
}

buscaCep();

