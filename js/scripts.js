$(function() {
    // Primeiro function em javascript.
    // pegando o elemento la do html
    $('nav.mobile').click(function() {
        //o que vai acontecer ao clicar no menu para mobile
        
        //pego o menu escondido
        var listaMenu = $('nav.mobile ul');

        /**  
         * //Abre o menu atraves do fadeIn
           //caso o menu esteja escondido seja verdadeiro
            if (listaMenu.is(':hidden') == true) {
                //mostra menu
                listaMenu.fadeIn();
            }else{
                //caso contrario , esconda o menu
                listaMenu.fadeOut();
            }
        */

       
        /**
         *  //abre e fecha o menu atraves do show ou manipulando css com a function css
            if (listaMenu.is(':hidden') == true) {
                 listaMenu.show();
                 listaMenu.css('display','block');
            } else {
                 listaMenu.hide('display','none');
            }
         * 
         */

        // condicao para abrir e fechar o menu 
        if (listaMenu.is(':hidden') == true) {
            /**
             * vamos trocar o icone ao abrir o menu
             * guardo na variavel icone tudo que esta dentro da classe abaixo
             * removeClass tira o classe do icone
             * addClass adiciona a nova classe
             */
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-bars');
            icone.addClass('fa-times');
            listaMenu.slideToggle();
        } else {
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-times');
            icone.addClass('fa-bars');
            listaMenu.slideToggle();
        }

    });

    //condicao para o scrollBar do depoimentos e servicos
    if ($('target').length > 0) {
        //O elemento existe , e precisamos dar o scroll em algum elemento.

        //aqui estou indo na tag target e pegando o atributo target e concatenando com #
        var elemento = '#'+$('target').attr('target');
        var divScroll = $(elemento).offset().top;
        // alert(divScroll);
        $('html,body').animate({'scrollTop':divScroll},1500);

    }

    //carrega a pagina contato e outras dinamicamente
    carregarDinamico();
    function carregarDinamico() {
        $('[realtime]').click(function(){ // no click do atributo realtime que é o contato
            var pagina = $(this).attr('realtime'); //pego a pagina
            $('.container-principal').hide();// escondo a classe container
            $('.container-principal').load(include_path+'pages/'+pagina+'.php'); //dou um include

            //inicializando google-maps
            setTimeout(function() {
              initialize();
              addMarker(-23.4959869,-46.669533,'',"Meu Espaço",undefined,true);
            },1000);
            
            $('.container-principal').fadeIn(1000);
            return false;
        })
    }
})