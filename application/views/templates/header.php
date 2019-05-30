<body>
        <div class="nav">
        <nav class="black nav-extended" role="none">
            <div class="nav-wrapper container">
            <a href="#" class="brand-logo"><i class="hb-ico">Hunico</i>Hunebedcentrum</a>
            <a href="#" data-target="side-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li class="waves-effect waves-dark"><a href="<?=base_url('log-out')?>">Logout</a></li>
            </ul>
            <div class="nav-content">
                <ul class="tabs tabs-transparent">
                <li class="tab"><a href="<?=base_url('home')?>">Home</a></li>
                <li class="tab"><a href="<?=base_url('#')?>">Vragen</a></li>
                <li class="tab"><a href="<?=base_url('Pages')?>">Pagina's</a></li>
                </ul>
            </div>  
            <ul class="sidenav" id="side-menu">
                <li><a href="log-out">Logout</a></li>
            </ul>
            </div>
        </nav>
        </div>