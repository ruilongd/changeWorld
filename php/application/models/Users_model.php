<?php
/*
 * 会员用户
 * @author sz.ljx
 * @author webljx@163.com
 * @link www.aicode.org.cn
 */

class Users_model extends MY_Model
{
    public $_table        = 'users';
    public $primary_key   = 'id';
    public $before_create = array('created_at', 'updated_at', 'updated_valid');
    public $before_update = array('updated_at', 'updated_valid');
    public $protected_attributes = array('id');

    private $_pwd_key = '5jGwhZLONPxb';

    public function __construct()
    {
        parent::__construct();
    }

    public function get_header($header)
    {
        return strpos($header, 'http') === false ? $this->config->base_url($header) : $header;
    }

    public function set_password()
    {

    }

    public function get_password($password = '')
    {
        return md5($this->_pwd_key.$password.$this->_pwd_key);
    }

    public function get_many_user($a_user = array(), $select = 'id,nickname,header,mobi')
    {
        $ret = array();
        $this->db->select($select);
        if($users = $this->get_many($a_user)){
            foreach($users as $item){
                $id = $item['id'];
                unset($item['id']);
                $ret[$id] = $item;
            }
        }

        return $ret;
    }

    public function check_shop($seller_uid)
    {
        $result = array('status' => 0, 'message' => '', 'data' => array());
        $this->db->select('id,nickname,header');
        $user = $this->get($seller_uid);
        if(! $user){
            $result['status'] = 1;
            $result['message'] = '店铺不存在';
        }else{
            $result['data'] = $user;
        }

        return $result;
    }
}
