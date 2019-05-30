<?php
class Login extends CI_Controller {

        public function view()
        {
            $this->load->helper('url');
            $this->load->view('templates/head');
            $this->load->view('login/login');
        }
}