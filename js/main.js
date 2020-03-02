$(document).ready(function() {
/*
    // Invoco le funzioni per cambiare slide
    $('.next').click(nextSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva
    $('.prev').click(prevSlide);
*/
    // Definisco le funzioni nextImage e prevImage
    function nextSlide() {
        if ( $('.images img.active').hasClass('last') ) {

            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prossimaImg = $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    }

    function prevSlide(){
        if ( $('.images img.active').hasClass('first')) {

            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active');

            //Pallini
            $('i.active').removeClass('active');
            $('.last').addClass('active');
        } else {
            var imgAttiva = $('.images img.active');
            var precedenteImg = $('.images img.active').prev();

            imgAttiva.removeClass('active');
            precedenteImg.addClass('active');

            //Pallini
            var pallinoAttivo = $('i.active');
            var pallinoPrecedente = $('i.active').prev();

            pallinoAttivo.removeClass('active');
            pallinoPrecedente.addClass('active');
        }
    }


    //Timing functions
    // var giri = 0;
    // var clock = setInterval(nextSlide, 3000);
    // function bloccoSlide(){
    //     giri = giri + 1;
    //     if (giri == 8) {
    //         clearInterval(clock);
    //     }
    // }
    // var giri = 0;
    // var clock = setInterval(nextSlide{
    //     giri = giri + 1;
    //     if (giri == 8) {
    //         clearInterval(clock);
    //     }
    // }, 1000);

});
