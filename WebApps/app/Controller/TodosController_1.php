<?php
class TodosController extends AppController{
	public $components = array('RequestHandler');
	public function index(){
		$todos = $this->Todo->find('all');
		$this->set(array(
			'list' => $todos,
			'_serialize' => 'list'
		));
	}
}