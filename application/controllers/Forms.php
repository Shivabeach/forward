<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Forms extends CI_Controller {

  public function index()
  {
    $data['header'] = "Blog Forms";
    $data['title'] = "Blog Forms";
    $data['content'] = "forms/forms";
    $this->load->view("template/template", $data);





  }

}

/* End of file Forms.php */