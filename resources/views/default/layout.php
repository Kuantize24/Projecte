<?php require_once '../../public/libraries/ti.php'; 
    session_start(); 
?>

<!DOCTYPE html>
    
	<html lang="en">
	<head>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php startblock('title') ?>
            <title>Projecte</title>
        <?php endblock() ?>
	    
        
        <link rel="stylesheet" type="text/css" href="../../public/css/bootstrap/bootstrap.min.css">
        
        <script src="../../public/js/jquery/jquery-3.3.1.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
		<script src="../../public/js/bootstrap/bootstrap.min.js"></script>

        <?php startblock('stylesheet') ?>
        <!-- CSS and JS  -->
        <?php endblock() ?>

        <link rel="stylesheet" type="text/css" href="../../public/css/default/layout.css">

	</head>
	<body> 
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                        <a class="navbar-brand" href="#">
                           Projecte VADAM
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                            <div class="btn-group">
                                <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Login
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <?php startblock('login') ?>
                                        <!-- login  -->
                                    <?php endblock() ?>
                                </div>
                            </div>
                        </div>
                    </nav> 
               
                    <?php startblock('principal') ?>
                        <!-- principal  -->
                    <?php endblock() ?>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <?php startblock('footer') ?>
                        <!-- footer  -->
                    <?php endblock() ?>
                </div>
            </div>
        </div>
    </body>
</html>