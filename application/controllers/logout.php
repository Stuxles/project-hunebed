<?php
class Logout extends CI_Controller {

    public function view()
    {
        $this->load->helper('url');
        $this->load->view('templates/head');
        $this->load->view('templates/header');
        $this->load->view('login/log-out');
        $this->load->view('templates/footer');
    }
}