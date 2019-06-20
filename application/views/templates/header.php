<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="<?= base_url('assets/js/materialize.min.js') ?>"></script>
<script>
    const BASE_URL = "<?php echo base_url().index_page();?>";
    const CURRENT_PAGE = '/<?= current_url() ?>'.replace('<?= base_url() ?>', '');
</script>
<body>
    <div class="nav">
        <nav class="black nav-extended">

            <div class="nav-wrapper container">
                <a href="<?=base_url()?>" class="brand-logo"><i class="hb-ico" style="width:73px;"></i><span class="hide-on-med-and-down">Hunebedcentrum</span></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li class="logged-in" style="display:none;" ><a class="waves-effect waves-light btn hb-red" href="<?=base_url('log-out')?>"></i>Logout</a></li>
                    <li class="logged-out" style="display:none;" ><a class="waves-effect waves-light btn hb-red" href="<?=base_url('login')?>">Login</a></li>
                </ul>


<!--                Slide out side hamburger menu-->
                 <ul id="slide-out" class="sidenav">
                     <li><a href="<?=base_url()?>"><i class="material-icons">home</i>Home</a></li>
                     <li><a href="<?=base_url('questions')?>"><i class="material-icons">cloud</i>Vragen</a></li>
                     <li><a href="<?=base_url('user/userpage')?>"><i class="material-icons">people</i>Mijn account</a></li>

                     <li><div class="divider admin" style="display:none"></div></li>
                     <li><a class="subheader admin" style="display:none">Admin</a></li>
                     <li class="admin" style="display:none"><a href="<?=base_url('moderator')?>"><i class="material-icons">settings</i>Moderatie</a></li>

                     <li class="logged-in" style="display:none;" ><a class="waves-effect waves-light btn hb-red" href="<?=base_url('log-out')?>"></i>Logout</a></li>
                     <li class="logged-out" style="display:none;" ><a class="waves-effect waves-light btn hb-red" href="<?=base_url('login')?>">Login</a></li>




                 </ul>
                <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            </div>

            <div class="nav-content container ">
                <ul class="tabs tabs-transparent hide-on-med-and-down">
                    <li class="tab"><a href="<?=base_url()?>">Home</a></li>
                    <li class="tab"><a href="<?=base_url('questions')?>">Vragen</a></li>
                    <li class="tab"><a href="<?=base_url('user/userpage')?>">Mijn account</a></li>
                    <li class="tab admin" style="display:none"><a href="<?=base_url('moderator')?>">Moderatie</a></li>
                </ul>
            </div>
        </nav>
    </div>