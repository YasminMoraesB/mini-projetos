const buttonCat = document.getElementById('button-cat');

buttonCat.addEventListener('click', () => {
    
    async function catAPI() {
        const url = 'https://api.thecatapi.com/v1/images/search'; 
        const response = await fetch(url);
        const cat = await response.json();
        const img = document.querySelector('.container-img');
        img.src = cat[0].url;  
        img.style.display = 'block'; 
    }
    
    catAPI();
});