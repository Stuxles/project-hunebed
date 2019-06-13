<?php
class User extends CI_Controller
{

    public function view($page = 'userpage')
    {
        if (!file_exists(APPPATH . 'views/user/' . $page . '.php')) {
            // Whoops, we don't have a page for that!
            show_404();
        }

        $this->load->helper('url');
        $this->load->view('templates/head');
        $this->load->view('templates/header');
        $this->load->view('user/' . $page);
        $this->load->view('templates/footer');
    }
}
