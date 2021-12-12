$(document).ready(function() {
    $('.mp3').click(function() {
        let nombre = $(this).children('span.nombre').text();
        let mp3 = $(this).children('span.sonido').text();
        let imagen = $(this).children('span.imagen').text();

        let msg = $(this).children('span.mensaje').text();
        cambiarCancion(mp3)
        cambiarTitulo(nombre)
        cambiarImagen(imagen)

        mostrarMensaje(msg)

    })
    
    function cambiarTitulo(nombre) {
        $('#nombreCancion').text(nombre)
    }
    function cambiarCancion(mp3) {

        $('#musicSource').attr("src", mp3);
        let audio = $('#player')
        audio[0].pause();
        audio[0].load();//suspends and restores all audio element
        audio[0].play()
    }
    function cambiarImagen(imagen) {
        let img = "../img/"+imagen
        $('body').css('background-image', 'url(' + img + ')');
        $('#caratula').attr('src', )
    }
    function cambiarCaratula(caratula) {
        let img = "../img/caratulas/"+caratula
        $('#caratula').attr('src', img)
    }
    function mostrarMensaje(msg) {
        $('.msg').text(msg)
       
    }
})