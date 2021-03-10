const card = document.querySelector('.card'),
    container = document.querySelector('.container'),
    title = document.querySelector('.title'),
    sneaker = document.querySelector('.sneaker img'),
    purchase = document.querySelector('.purchases button'),
    description = document.querySelector('.info h3'),
    sizes = document.querySelector('.sizes');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'all 0.5 ease';
    title.style.transform = 'translateZ(100px)';
    sneaker.style.transform = 'translateZ(150px) rotateZ(45deg)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = 'translateZ(0)';
    sneaker.style.transform = 'translateZ(0) rotateZ(0deg)';
    description.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0)';
    purchase.style.transform = 'translateZ(0)';
});