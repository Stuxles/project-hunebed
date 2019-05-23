<?php
class Questions extends CI_Controller {

    public function view($page = 'questions')
    {
        if ( ! file_exists(APPPATH.'views/questions/'.$page.'.php'))
        {
            // Whoops, we don't have a page for that!
            show_404();
        }

        $this->load->helper('url');
        $this->load->view('templates/head');
        $this->load->view('templates/header');
        $this->load->view('questions/'.$page);
        $this->load->view('templates/footer');
    }
}
