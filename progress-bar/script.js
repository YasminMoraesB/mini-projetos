window.addEventListener('scroll', () =>{
    const scroll = window.scrollY;
    const heightDoc = document.documentElement.scrollHeight;
    const heightScreen =  window.innerHeight;
    const heightScroll = heightDoc - heightScreen;


    const totalScoll = (scroll /heightScroll) * 100;
    const barProgress = document.querySelector('#progress-bar');
    barProgress.style.width = `${totalScoll}%`;

    console.log(totalScoll)
})