$(function(){
    
    //slide atual
    var curSlide = 0;

    //o total de slides.
    //coloquei o -1 porque o cur comeca no 0
    var maxSlide = $('.banner-single').length - 1;

    //tempo de espera
    var delay = 3;

    initSlider(); // inicia o slide
    changeSlide(); // muda pro proximo slide infinitamente

    function initSlider() {
        //quero que todos os banners ficam escondidos
        $('.banner-single').hide();

        //quero que apenas o primeiro apareça
        $('.banner-single').eq(0).show();

        //aqui um for para adicionar o numero de bullets
        //de acordo com o numero de imagens
        for (var i = 0;i < maxSlide+1; i++) {
            //aqui eu vou ter todo o html dentro do bullets
            var content = $('.bullets').html();
            if(i == 0)
                content +='<span class="active-slider"></span>';
            else
                content +='<span></span>';
            $('.bullets').html(content);             
        }
    }

    function changeSlide() {
        setInterval(function(){
            //esconde a imagem
            $('.banner-single').eq(curSlide).stop().fadeOut(2000);

            //incrementa a imagem
            curSlide++;
            //se a imagem atual for maior que a ultima imagem
            //entao zera a imagem atual
            if (curSlide > maxSlide) {
                curSlide = 0;
            }
            //mostra a imagem
            $('.banner-single').eq(curSlide).stop().fadeIn(2000);
            //trocar bullets da navegacao do slider
            $('.bullets span').removeClass('active-slider'); // removo o active de todos
            $('.bullets span').eq(curSlide).addClass('active-slider'); // adiciono o active somente ao atual de acordo com a imagem
        },delay * 1000);
    }

  $('body').on('click','.bullets span',function() {
      //faz referencia ao que foi clicado no caso o this
      var currentBullet = $(this); //bullet atual
      $('.banner-single').eq(curSlide).stop().fadeOut(1000); // escondo o atual ao clicar
      curSlide = currentBullet.index(); // o slide atual recebe o mesmo numero do bullet
      $('.banner-single').eq(curSlide).stop().fadeIn(1000);//mostro o bullet de acordo com o index da imagem
      $('.bullets span').removeClass('active-slider');//removo o active
      currentBullet.addClass('active-slider');//adiciono o active no bullet que foi clicado
  });
})