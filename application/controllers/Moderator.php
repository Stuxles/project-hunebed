<?php
class Moderator extends CI_Controller {

    public function view()
        {
            $this->load->helper('url');
            $this->load->view('templates/head');
            $this->load->view('templates/header');
            $this->load->view('moderator/moderator');
            $this->load->view('templates/footer');
        }
}