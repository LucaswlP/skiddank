<!-- INCLUINDO OS INCLUDES -->
<!-- CONFIGURAÇÃO PRINCIPAL DO SITE -->
<?php   include('config.php');  ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>SkidDanki</title>
    
    <!-- FONTS AWESOME -->
    <link href="<?php echo INCLUDE_PATH; ?>estilo/css/all.css" rel="stylesheet"> <!--load all styles -->
    <!-- CSS -->
    <link rel="stylesheet" href="<?php echo INCLUDE_PATH; ?>estilo/style.css">
    <!-- GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <!--  TAG DA CODIFICAÇÃO -->
    <meta charset="UTF-8">
    <!--  TAG PARA DESIGN RESPONSIVO -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Palavras-chaves,do,site,SkidDanki">
    <meta name="description" content="Descrição do site SkidDanki">
    <link rel="shortcut icon" href="<?php echo INCLUDE_PATH;?>favicon.ico" type="image/x-icon">
</head>
<body>
<base base="<?php echo INCLUDE_PATH;?>" />
    <?php
       // Trabalhando com Urls amigaveis
        /**
         * se existe a url entao da um get na url se nao coloca a home
         */
        $url = isset($_GET['url']) ? $_GET['url'] : 'home';

        // caso seja sobre ou servicos , adiciona a target: usado para o scrollbar
        switch ($url) {
            case 'depoimentos':
                echo '<target target="depoimentos" />';
                break;
            case 'servicos':
                echo '<target target="servicos" />';
                break;
            case 'sobre':
                echo '<target target="sobre" />';
                break;
        }
    ?>
    <!-- CABEÇALHO -->
    <header>
        <div class="center">
            <!-- LOGOTIPO DO SITE -->
            <div class="logo left"><a href="<?php echo INCLUDE_PATH; ?>">SkidDanki</a></div>
            <!-- BARRAS DE NAVEGAÇÃO PC E MOBILE -->
            <nav class="desktop right">
                <ul>
                    <li><a href="<?php echo INCLUDE_PATH; ?>">Home</a></li>
                    <li><a href="<?php echo INCLUDE_PATH; ?>depoimentos">Depoimentos</a></li>
                    <li><a href="<?php echo INCLUDE_PATH; ?>servicos">Serviços</a></li>
                    <li><a href="<?php echo INCLUDE_PATH; ?>sobre">Sobre</a></li>
                    <li><a realtime="contato" href="<?php echo INCLUDE_PATH; ?>contato">Contatos</a></li>
                    <li><a realtime="documentacao" href="<?php echo INCLUDE_PATH; ?>documentacao">Documentação</a></li>
                </ul>
            </nav> <!-- desktop -->
            <nav class="mobile right">
                <div class="botao-menu-mobile">
                    <i class="fas fa-bars"></i>
                </div>
                <ul>
                    <li><a href="<?php echo INCLUDE_PATH; ?>">Home</a></li>
                    <li><a href="<?php echo INCLUDE_PATH; ?>depoimentos">Depoimentos</a></li>
                    <li><a href="<?php echo INCLUDE_PATH; ?>servicos">Serviços</a></li>
                    <li><a href="<?php echo INCLUDE_PATH; ?>sobre">Sobre</a></li>
                    <li><a realtime="contato" href="<?php echo INCLUDE_PATH; ?>contato">Contatos</a></li>
                    <li><a realtime="documentacao" href="<?php echo INCLUDE_PATH; ?>documentacao">Documentação</a></li>
                </ul>
            </nav> <!-- mobile -->
        <div class="clear"></div> <!-- clear -->
        </div> <!-- center -->
    </header>
    <div class="container-principal">
    <?php 
     /**
      * se o arquivo que esta na pasta pages existe
      * ele da um include
      */
     if (file_exists('pages/'.$url.'.php')) {
         include('pages/'.$url.'.php');
     }else{
         //pagina de erro
         //caso seja sobre ou servicos direciona pra home se nao direciona para erro
         //necessario pois as paginas estao na home e vamos usar scroll com javascript
         if ($url != 'depoimentos' && $url != 'servicos' && $url != 'sobre' && $url != 'documentacao') {
             $pagina404 = true;
             include('pages/404.php');
         }else{
             include('pages/home.php');
         }
        
     }
    ?>
    </div> <!-- container-principal-->

    <!-- quando cai na pagina de erro adiciona a classe fixed -->
    <footer <?php if(isset($pagina404) && $pagina404 == true) echo 'class="fixed"'; ?>>
        <div class="center">
            <p>Todos os direitos Reservados</p>
        </div>
    </footer>
    <script src="<?php echo INCLUDE_PATH; ?>js/jquery-3.5.1.min.js"></script>
    <script src="<?php echo INCLUDE_PATH; ?>js/constants.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDHPNQxozOzQSZ-djvWGOBUsHkBUoT_qH4"></script>
    <script src="<?php echo INCLUDE_PATH; ?>js/map.js"></script>
    <script src="<?php echo INCLUDE_PATH; ?>js/scripts.js"></script>

    <?php
    if ($url == 'home' || $url == 'documentacao' || $url == '') {    
    ?>
    <script src="<?php echo INCLUDE_PATH; ?>js/slider.js"></script>
    <?php
    }
    ?>
    <?php
    if ($url == 'contato') {    
    ?>
    <?php
    }
    ?>
    <script src="<?php echo INCLUDE_PATH;?>js/especialidadeDinamica.js"></script>
   

   
</body>
</html>