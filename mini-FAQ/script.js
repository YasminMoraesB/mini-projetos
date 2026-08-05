const accordions = document.querySelectorAll('.accordion-item');

//forEach para passar por cada accordion
accordions.forEach(accordion =>{
    accordion.addEventListener('click',() => {
       const content = accordion.querySelector(".accordion-content");
       content.classList.toggle('active');
       const arrow = accordion.querySelector(".arrow");
       arrow.classList.toggle("active");
    })
})