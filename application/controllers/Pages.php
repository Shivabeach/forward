<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Controller {

  public function index()
	{
		if($query = $this->pagesModel->get_blog()) {
			$data['blog'] = $query;
		}
		if($query = $this->pagesModel->getKeys()){
			$data['keys'] = $query;
		}
		$data['title'] = "Blog";
		$data["header"] = "Blog";
		$data["content"] = "pages/primary";
		$this->load->view("template/template", $data);
	}

  public function single()
	{
		if($query = $this->pagesModel->singleFile()) {
			$data['single'] = $query;
		}
		if($query = $this->pagesModel->getKeys()){
			$data['keys'] = $query;
		}

		$data['title'] = "Single View";
		$data["header"] = "Single View";
		$data["content"] = "pages/single";
		$this->load->view("template/template", $data);
	}

}

/* End of file Pages.php */