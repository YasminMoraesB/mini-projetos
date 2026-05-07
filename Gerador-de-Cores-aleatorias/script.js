const botao = document.querySelector('button');

function gerarCor(){
    const hex = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
    document.body.style.backgroundColor = `#${hex}` 
    document.querySelector('p').innerText = `#${hex}`;
}
botao.addEventListener('click',gerarCor);