
# Adding a page
You can simply add a `.php` page in `application/views/pages` to add a page to the project.
This page is accessible through `www.example.com/your_page`.

To add a special page(s) lik the login page(s) or an account page(s) you might want to add a new controller and route and put the page in a seperate folder. You might also want to do this when you have a lot of relateble pages.

To do this you need to create a new controller in `application/controllers`.  Give the controller a logical name like "account.php". Add a function to the controller. THe controller should look something like this:

    <?php
    class <controller> extends CI_Controller {
	    public  function <function>() 
	    {
		    $this->load->view('<view_folder>/<page>');
	    }
    }
Be sure it extends `CI_Controller`

Following up you might want to route a link to the new account page. You do this in `application/config/routes.php`.  You need to add a route like so: 

    $route['<link>'] = '<controller>/<function>';
>More about [views](https://codeigniter.com/user_guide/general/views.html)
More about [controllers](https://codeigniter.com/user_guide/general/controllers.html)
More about [routing](https://codeigniter.com/user_guide/general/routing.html)
