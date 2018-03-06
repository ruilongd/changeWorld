<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/*
 * @author sz.ljx
 * @email webljx@163.com
 * @link www.aicode.org.cn
 */
use RongCloud\RongCloud;
class Room extends API_Controller {

	public function __construct()
    {
        parent::__construct();

        $this->load->model('Room_model');
    }

	/**
	 * @api {post} /api/room/out 直播-退出房间
	 * @apiVersion 1.0.0
	 * @apiName room_out
	 * @apiGroup api
	 *
	 * @apiSampleRequest /api/room/out
	 *
	 * @apiParam {Number} user_id 用户唯一ID
	 * @apiParam {String} sign 校验签名
	 * @apiParam {Number} room_id 房间号
	 *
	 * @apiSuccess {Number} status 接口状态 0成功 其他异常
	 * @apiSuccess {String} message 接口信息描述
	 * @apiSuccess {Object} data 接口数据集
	 *
	 * @apiSuccessExample {json} Success-Response:
	 * {
	 *    "data": [],
	 *    "status": 0,
	 *    "message": "成功"
	 * }
	 *
	 * @apiErrorExample {json} Error-Response:
	 * {
	 * 	   "data": "",
	 *     "status": -1,
	 *     "message": "签名校验错误"
	 * }
	 */
	public function out()
	{
		$room_id = (int)$this->input->get_post('room_id');
		if($info = $this->Room_model->get($room_id)){
			if($info['anchor_uid'] == $this->user_id){
				$update = array('status' => 4);
			}else{
				$update = array('offline' => $info['offline'] + 1);
			}
			$this->Room_model->update($room_id, $update);
			$this->ajaxReturn();
		}else{
			$this->ajaxReturn([], 1, '房间不存在');
		}
	}

	/**
	 * @api {post} /api/room/in 直播-进房间
	 * @apiVersion 1.0.0
	 * @apiName room_in
	 * @apiGroup api
	 *
	 * @apiSampleRequest /api/room/in
	 *
	 * @apiParam {Number} user_id 用户唯一ID
	 * @apiParam {String} sign 校验签名
	 * @apiParam {Number} room_id 房间号
	 *
	 * @apiSuccess {Number} status 接口状态 0成功 其他异常
	 * @apiSuccess {String} message 接口信息描述
	 * @apiSuccess {Object} data 接口数据集
	 * @apiSuccess {Number} data.chat_room_id 聊天室ID
	 *
	 * @apiSuccessExample {json} Success-Response:
	 * {
	 *     "data": {
	 *         "chat_room_id": 2,
	 *     },
	 *     "status": 0,
	 *     "message": "成功"
	 * }
	 *
	 * @apiErrorExample {json} Error-Response:
	 * {
	 * 	   "data": "",
	 *     "status": -1,
	 *     "message": "签名校验错误"
	 * }
	 */
	public function in()
	{
		$room_id = (int)$this->input->get_post('room_id');
		if($info = $this->Room_model->get($room_id)){
			$ret = array();
			$update = array();
			if($info['anchor_uid'] != $this->user_id){
				$update['views'] = $info['views'] + 1;
				// $this->Room_model->update($room_id, $update);
			}
			//融云
	        $config = config_item('rongcloud');
        	$rongCloud = new RongCloud($config['app_key'], $config['app_secret']);
        	//聊天室
        	$ret['chat_room_id'] = $info['chat_room_id'];
        	if(! $info['chat_room_id']){
	        	$chat_room_id = $room_id;
	        	$response = $rongCloud->Chatroom()->create([$chat_room_id => $info['title']]);
	        	if($response && $result = json_decode($response, true)){
	        		if($result['code'] == 200){
	        			$ret['chat_room_id'] = $update['chat_room_id'] = $chat_room_id;
	        		}
	        	}
        	}
        	$update && $this->Room_model->update($room_id, $update);
        	//token
        	/*$token = '';
        	$user = $this->get_user();
        	$this->load->model('Users_model');
        	$response = $rongCloud->user()->getToken(
        		$this->user_id,
        		$user['nickname'],
        		$this->Users_model->get_header($user['header'])
        	);
        	if($response && $result = json_decode($response, true)){
        		if($result['code'] == 200){
        			$token = $result['token'];
        		}
        	}
        	$ret['token'] = $token;*/

			$this->ajaxReturn($ret);
		}else{
			$this->ajaxReturn([], 1, '房间不存在');
		}
	}
}
