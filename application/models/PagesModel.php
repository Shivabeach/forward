<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class PagesModel extends CI_Model {
  function get_blog() {
		$this->db->select("date,content,id,tags,title");
		$this->db->order_by('date', 'desc');
		$query = $this->db->get("blog");
		return $query->result();
	}

	function singleFile()
	{
		$id = $this->uri->segment(3);
		$this->db->select("date,content,id,tags,title,primeKeys");
		$this->db->where("id", $id);
		$query = $this->db->get("blog");
		return $query->result();
	}

	function getKeys()
	{
		$this->db->select("primeKeys");
		$this->db->order_by("primeKeys", "asc");
		$query = $this->db->get("blog");
		return $query->result();
	}


}

/* End of file PagesModel.php */