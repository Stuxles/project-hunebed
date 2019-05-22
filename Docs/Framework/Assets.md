# Assets
To acces the assets directory in a php file you can simply use `base_url()`.
The `base_url()` function will return the root folder of the project.
And to acces the assets folder (or for that matter other folder in the project) you do the following:
```
<?=base_url('assets/css/materialize.css')?>
```

Be sure to include the url helper int he right controller like so:
```
$this->load->helper('url');
```
