<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Forms extends CI_Controller {

  public function index()
  {
    if($query = $this->pagesModel->walks()){
			$data['waled'] = $query;
		}
		if($query = $this->pagesModel->last_date()){
			$data['last'] = $query;
		}
    $data['header'] = "Blog Forms";
    $data['title'] = "Blog Forms";
    $data['content'] = "forms/forms";
    $this->load->view("template/template", $data);
  }

  public function walk()
	{
		$this->form_validation->set_error_delimiters('<li class="error">', '</li>');
		$data = [
			'date'     => $this->input->post('date'),
			'distance' => $this->input->post('distance'),
			'place'    => $this->input->post('place'),
		];
		$this->form_validation->set_rules('date', 'Date', 'required');
    $this->form_validation->set_rules('distance', 'Distance', 'required|trim');
    $this->form_validation->set_rules('place', 'Place', 'required|trim');

    if($this->form_validation->run() == false)
    {
    	echo validation_errors();
    }else
    {
    	$this->db->insert("walk", $data);
    	echo "You walked";
    }
	}

  public function blogs()
	{
		$data_in = [
			'date'    => $this->input->post('date'),
			'title'   => $this->input->post('title'),
      'type'    => $this->input->post('type'),
			'content' => $this->input->post('content'),
			'tags'    => $this->input->post('tags'),
			'primeKeys' => $this->input->post('primeKeys'),
			'words' => $this->input->post('words')
		];
		$this->form_validation->set_rules('date', 'Date', 'required');

    $this->form_validation->set_rules('title', 'Title', 'required|trim');
    $this->form_validation->set_rules('type', 'What type', 'required|trim');

    $this->form_validation->set_rules('content', 'Content', 'required|trim');
    $this->form_validation->set_rules('tags', 'Tags', 'required|trim');
    $this->form_validation->set_rules('primeKeys', 'Prime Keys', 'trim');
    $this->form_validation->set_rules('words', 'Words', 'required');

    if($this->form_validation->run() == false)
    {
    	echo validation_errors();
    }else
    {
    	$this->db->insert("blog", $data_in);
    	echo "You Blogged";
    }
	}

}

/* End of file Forms.php */