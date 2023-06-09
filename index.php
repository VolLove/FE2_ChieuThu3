<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <link
        href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.1/underscore-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone-min.js"></script>
    <script src="js/models/models.js"></script>
    <script src="js/collections/collections.js"></script>
    <script src="js/templates/templates.js"></script>
    <script src="js/views/view.js"></script>
</head>

<body>
    <header>
        <div class="container header-top">
            <div class="row">
                <div class=" col-md-4 col-12">
                    <div class="left-content float-start">
                        <ul class="list-group">
                            <li class="list-group-item">+832 863 4349</li>
                            <li class="list-group-item">support@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div class=" col-md-8 col-12">
                    <div class="right-content float-end">
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item"><a class="first link-dark" href="#">My account</a></li>
                            <li class="list-group-item"><a class="link-dark" href="#">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-top">
            <div class="container">
                <div class="header-mid">
                    <div class="logo">
                        <img src="images/backbone.png" alt="LOGO">
                    </div>
                    <div class="search-bar">
                        <form class="d-flex">
                            <input class="form-control me-2" name="search" type="search" placeholder="Search"
                                aria-label="Search">
                            <button class="btn btn-search" type="submit">Search</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <button class="navbar-toggler" type="button">
                </button>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle">
                                Dropdown link
                            </a>
                            <ul class="dropdown-menu shadow " id="dropdownmenu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
    <section>
        <div class="slider" id="slider">
            <button class="slider-btn slider-btn-right" id="btnSliderRight"><i
                    class="fa-solid fa-arrow-right"></i></button>
            <button class="slider-btn slider-btn-left" id="btnSliderLeft"><i
                    class="fa-solid fa-arrow-left"></i></button>
            <div class="slider-main" id="sliderMain">
                <?php

                for ($i = 0; $i < 3; $i++) :
                ?>
                <div class="slider-item" id="sliderItem">
                    <img class="img-bg" src="images/774-7744281_samsung-electronics-samsung-electronic-product-png.png"
                        alt="">
                    <div class="item title">Product</div>
                    <div class="item price">1000000 VND</div>
                </div>
                <?php
                endfor; ?>
            </div>
        </div>
    </section>

    <div class="container">
        <div id="product-table"></div>


        <script>
        var products = new Products();
        var tableProductView = new TableProductView({
            collection: products
        });
        products.fetch({
            reset: true
        });
        </script>
    </div>
    <footer class="bg-dark py-5">
        <div class="container">
            <div class="main">
                <span class="coppy">Copyright © 2023 Đào Tân Quốc Việt</span>
                <span class="tech">
                    <a href="https://getbootstrap.com/">Bootstrap 5</a>
                    <a href="https://backbonejs.org/">Backbone.js</a>
                    <a href="https://underscorejs.org/">Underscore.js</a>
                    <a href="https://jquery.com/">Jquery.js</a>
                </span>
            </div>
        </div>

    </footer>
</body>
<script src="js/scrip.js"></script>

</html>