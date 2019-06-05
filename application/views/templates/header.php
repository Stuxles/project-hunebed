<body> 
    <div class="nav">
        <nav class="black nav-extended">
            <div class="nav-wrapper container">
                <a href="<?=base_url()?>" class="brand-logo"><i class="hb-ico" style="width:73px;"></i>Hunebedcentrum</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li class="waves-effect waves-dark"><a href="<?=base_url('log-out')?>">Logout</a></li>
                </ul>
            </div>
            <div class="nav-content container">
                <ul class="tabs tabs-transparent">
                <li class="tab"><a href="<?=base_url()?>">Home</a></li>
                <li class="tab"><a href="<?=base_url('user-page')?>">Vragen</a></li>
                    <li class="tab"><a href="<?=base_url('user/userpage')?>">Mijn account</a></li>
                </ul>
            </div>
            <ul class="sidenav" id="side-menu">
                <li><a href="log-out">Logout</a></li>
            </ul>
        </nav>
    </div>

        