/**
 * função criada para carregar as especialidades uma por uma
 */
 $(function() {

  /**
   * @atual recebe a especialidade atual
   * @maximo total de especialidades
   * @timer nosso contador
   * @animaxaoDelay recebe 3
   */
  var atual = -1;
  var maximo = $('.box-especialidade').length - 1;
  var timer;
  var animacaoDelay = 3;

  executarAnimacao();

      /**
       * pego a class box.especialidade e escondo
       * o timer recebe o setInterval que executa a cada 3 segundos
       * ou seja a cada 3 segundos a logica incrementa e mostra o proximo
       * box especialidade ate chegar no ultimo.
       */
  function executarAnimacao() {
      $('.box-especialidade').hide();
      timer = setInterval(logicaAnimacao, animacaoDelay * 1000);

      /**
       * logica da nossa animacao
       * incremento o atual
       * se for maior que o maximo
       * limpo o tempo e paro
       * comtinua e a classe box especialidade e mostra o primeiro box
       */
      function logicaAnimacao() {
          atual++;
          if (atual > maximo) {
              clearInterval(timer);
              return false;
          }

          $('.box-especialidade').eq(atual).fadeIn();
      }

  }
})