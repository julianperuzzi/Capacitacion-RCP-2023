$(document).ready( function () {
    // Cargar contenido de las secciones desde archivos externos
    $('.intro').load('intro.html');
    $('.spotify').load('spotify.html');
    $('.DEA').load('DEA.html');
    $('.imagenes').load('imagenes.html');
    $('.recursos').load('recursos.html');
    $('.videos').load('videos.html');
    $('.navbar').load('navbar.html');
    $('.video-rcp').load('video-rcp.html');
    $('.mapaDEA').load('mapaDEA.html');
});

function smoothScroll(target) {
    const navbarHeight = $('.navbar').height(); 
    const targetOffset = $(target).offset().top - navbarHeight - 30; 

    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
};




