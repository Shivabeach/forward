<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class PagesModel extends CI_Model {
  function get_blog() {
		$this->db->select("date,content,id,tags,title");
		$this->db->where('type', 'blog');
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
		$this->db->where('type', 'blog');
		$this->db->order_by("primeKeys", "asc");
		$query = $this->db->get("blog");
		return $query->result();
	}

	function get_health()
	{
		$this->db->select("date,content,id,tags,title");
		$this->db->where('type', 'health');
		$this->db->order_by('date', 'desc');
		$query = $this->db->get("blog");
		return $query->result();
	}
	function getHealthKeys()
	{
		$this->db->select("primeKeys");
		$this->db->where('type', 'health');
		$this->db->order_by("primeKeys", "asc");
		$query = $this->db->get("blog");
		return $query->result();
	}

	public function walks()
	{
		$this->db->select_sum('distance');
		$this->db->select("date");
		$query = $this->db->get("walk");
		return $query->result();
	}

	public function last_date()
	{
		$this->db->select_max('date');
		$query = $this->db->get('walk');
		return $query->result();
	}

}

/* End of file PagesModel.php */