const layers = document.querySelectorAll('.side > *');

window.addEventListener('scroll', function(){
    window.requestAnimationFrame(scrollBG);
});

function setBG(){
    let i = 1;
    layers.forEach((layer) => {
        layer.style.backgroundImage = `url(/assets/img/bg${i}.svg)`;
        i++;
    });
}

function scrollBG(){
    layers.forEach((layer) => {
        const speed = layer.getAttribute('speed');
        layer.style.backgroundPosition = `0 ${window.scrollY * speed * -1}px`;

        // layer.animate({
        //     backgroundPosition : `0 ${window.scrollY * speed * -1}px`
        // }, { duration : 1, fill: 'forwards' });
    });
}

setBG();