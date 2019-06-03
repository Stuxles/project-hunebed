<?php
class Moderator extends CI_Controller {

    public function view($page = 'moderator')
    {
        if ( ! file_exists(APPPATH.'views/moderator/'.$page.'.php'))
        {
            // Whoops, we don't have a page for that!
            show_404();
        }

        $this->load->helper('url');
        $this->load->view('templates/head');
        $this->load->view('templates/header');
        $this->load->view('moderator/'.$page);
        $this->load->view('templates/footer');
    }
}
