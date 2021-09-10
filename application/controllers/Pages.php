<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Pages extends CI_Controller
{

	public function index()
	{
		if ($query = $this->pagesModel->get_blog()) {
			$data['blog'] = $query;
		}
		if ($query = $this->pagesModel->getKeys()) {
			$data['keys'] = $query;
		}
		if ($query = $this->pagesModel->walks()) {
			$data['waled'] = $query;
		}
		if ($query = $this->pagesModel->last_date()) {
			$data['last'] = $query;
		}
		if ($query = $this->pagesModel->blog_title()) {
			$data['bt'] = $query;
		}

		$data['title'] = "Blog";
		$data["header"] = "Blog";
		$data["content"] = "pages/primary";
		$this->load->view("template/template", $data);
	}

	public function single()
	{
		if ($query = $this->pagesModel->singleFile()) {
			$data['single'] = $query;
		}
		if ($query = $this->pagesModel->getKeys()) {
			$data['keys'] = $query;
		}
		if ($query = $this->pagesModel->walks()) {
			$data['waled'] = $query;
		}
		if ($query = $this->pagesModel->last_date()) {
			$data['last'] = $query;
		}

		$data['title'] = "Single View";
		$data["header"] = "Single View";
		$data["content"] = "pages/single";
		$this->load->view("template/template", $data);
	}

	public function health()
	{
		if ($query = $this->pagesModel->get_health()) {
			$data['health'] = $query;
		}
		if ($query = $this->pagesModel->getHealthKeys()) {
			$data['healthkeys'] = $query;
		}
		if ($query = $this->pagesModel->walks()) {
			$data['waled'] = $query;
		}
		if ($query = $this->pagesModel->last_date()) {
			$data['last'] = $query;
		}
		if ($query = $this->pagesModel->health_title()) {
			$data['ht'] = $query;
		}

		$data['title'] = "General Health";
		$data["header"] = "General Health";
		$data["content"] = "pages/health";
		$this->load->view("template/template", $data);
	}

	public function singles()
	{
		if ($query = $this->pagesModel->singleFile()) {
			$data['single'] = $query;
		}
		if ($query = $this->pagesModel->getHealthKeys()) {
			$data['healthKeys'] = $query;
		}
		if ($query = $this->pagesModel->walks()) {
			$data['waled'] = $query;
		}
		if ($query = $this->pagesModel->last_date()) {
			$data['last'] = $query;
		}

		$data['title'] = "Single View";
		$data["header"] = "Single View";
		$data["content"] = "pages/single";
		$this->load->view("template/template", $data);
	}

	public function grids()
	{
		if($query = $this->pagesModel->walks()) {
			$data['waled'] = $query;
		}
		if($query = $this->pagesModel->last_date()) {
			$data['last'] = $query;
		}
		$data['title'] = "Factoids";
		$data["header"] = "Factoids";
		$data["content"] = "pages/tables";
		$this->load->view("template/full", $data);
	}

	public function learn()
	{
		if($query = $this->pagesModel->walks()) {
			$data['waled'] = $query;
		}
		if($query = $this->pagesModel->last_date()) {
			$data['last'] = $query;
		}
		$data['title'] = "Learning Grid";
		$data["header"] = "Learning Grid";
		$data["content"] = "pages/grid";
		$this->load->view("template/template", $data);
	}

public function taxes()
{
	$data['title'] = "Words";
	$data["header"] = "Words and Definition";
	$data["content"] = "pages/taxonmy";
	$this->load->view("template/full", $data);
}
}
/* End of file Pages.php */