<?php
class Quiz extends CI_Controller {

    public function view($page = 'quiz')
    {
        if ( ! file_exists(APPPATH.'views/quiz/'.$page.'.php'))
        {
            // Whoops, we don't have a page for that!
            show_404();
        }

        $this->load->helper('url');
        $this->load->view('templates/head');
        $this->load->view('templates/header');
        $this->load->view('quiz/'.$page);
        $this->load->view('templates/footer');
    }
}
