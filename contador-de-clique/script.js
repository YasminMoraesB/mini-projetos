const buttonCount = document.querySelector('#botao-clique');
const buttonReset = document.querySelector('#botao-reset');
const numbCount = document.getElementById('number-count');

const updateValue = () => {
    numbCount.innerHTML = count;    
};

let count = 0;
let intervalId = 0;

buttonCount.addEventListener('mousedown',() => {
    intervalId = setInterval(() =>{
        count +=1;
        updateValue();
    },100)
});
buttonReset.addEventListener('click',() =>{
    count = 0;
    updateValue();
})

buttonCount.addEventListener('mouseup', () => clearInterval(intervalId));
