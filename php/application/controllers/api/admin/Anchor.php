<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/*
 * @author sz.ljx
 * @email webljx@163.com
 * @link www.aicode.org.cn
 */
class Anchor extends API_Controller {

	public function __construct()
    {
        parent::__construct();

        // $this->check_operation();
        $this->load->model('Users_anchor_model');
    }

    /**
	 * @api {get} /api/admin/anchor 讲师列表
	 * @apiVersion 1.0.0
	 * @apiName anchor
	 * @apiGroup admin
	 *
	 * @apiSampleRequest /api/admin/anchor
	 *
	 * @apiParam {Number} admin_id 管理员唯一ID
	 * @apiParam {String} account 登录账号
	 * @apiParam {String} sign 校验签名
	 * @apiParam {Number} status 0待审核 1通过 2拒绝 -1全部
	 *
	 * @apiSuccess {Number} status 接口状态 0成功 其他异常
	 * @apiSuccess {String} message 接口信息描述
	 * @apiSuccess {Object} data 接口数据集
	 *
	 * @apiSuccessExample {json} Success-Response:
	 * {
	 *     "data": {
	 *         "status": [
	 *             "待审核",
	 *             "已通过",
	 *             "已拒绝"
	 *         ],
	 *         "count": 3,
	 *         "list": [
	 *             {
	 *                 "id": "1",
	 *                 "created_at": "2018-02-07 11:06:17",
	 *                 "updated_at": "2018-03-23 09:30:50",
	 *                 "status": "0",
	 *                 "mobi": "123123",
	 *                 "email": "2313@qq.com",
	 *                 "nickname": "Sad",
	 *                 "realname": "Qqqqqq"
	 *             }
	 *         ]
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
	public function index()
	{
		$ret = [];

		$this->load->model('Users_anchor_model');
		$ret['status'] = $this->Users_anchor_model->status();

		$where = [];
		$status = $this->input->get_post('status');
		if(isset($ret['status'][$status])){
			$where['status'] = $status;
		}else{
			$where[1] = 1;
		}

		$order_by = array('id' => 'desc');
		$ret['count'] = $this->Users_anchor_model->count_by($where);
		if($ret['count']){
			$this->db->select('id,created_at,updated_at,status,mobi,email,nickname,realname');
			$ret['list'] = $this->Users_anchor_model->order_by($order_by)->limit($this->per_page, $this->offset)->get_many_by($where);
		}

		$this->ajaxReturn($ret);
	}

	/**
	 * @api {get} /api/admin/anchor/view 讲师列表-详情
	 * @apiVersion 1.0.0
	 * @apiName anchor_view
	 * @apiGroup admin
	 *
	 * @apiSampleRequest /api/admin/anchor/view
	 *
	 * @apiParam {Number} admin_id 管理员唯一ID
	 * @apiParam {String} account 登录账号
	 * @apiParam {String} sign 校验签名
	 * @apiParam {Number} id 讲师唯一ID
	 *
	 * @apiSuccess {Number} status 接口状态 0成功 其他异常
	 * @apiSuccess {String} message 接口信息描述
	 * @apiSuccess {Object} data 接口数据集
	 *
	 * @apiSuccessExample {json} Success-Response:
	 * {
	 *     "data": {
	 *         "id": "3",
	 *         "created_at": "2018-03-14 11:12:31",
	 *         "updated_at": "2018-03-19 14:49:06",
	 *         "deleted": "0",
	 *         "status": "2",
	 *         "enable": "1",
	 *         "mobi": "13242424244",
	 *         "email": "288484847@qq.com",
	 *         "nickname": "3737",
	 *         "realname": "呵呵呵",
	 *         "certificate_type": "1",
	 *         "certificate_no": "8393939933",
	 *         "certificate_photo": "/uploads/2018/03/14/147e8912da401d7bf2c9fd097169a3b7.png",
	 *         "class_id": "1",
	 *         "summary": "444",
	 *         "other": null,
	 *         "anchor_photo": "[\"/uploads/2018/03/19/d2dcf2cead34b8abd43d5e769ae54042.jpg\"]",
	 *         "anchor_video": null,
	 *         "user_id": "31",
	 *         "job": "",
	 *         "province_id": "0",
	 *         "city_id": "0",
	 *         "area_id": "0",
	 *         "address": ""
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
	public function view()
	{
		$id = $this->input->get_post('id');
		if($info = $this->Users_anchor_model->get($id)){
			$this->ajaxReturn($info);
		}else{
			$this->ajaxReturn([], 1, '查看讲师详情ID错误');
		}
	}

	/**
	 * @api {post} /api/admin/anchor/save 讲师列表-编辑
	 * @apiVersion 1.0.0
	 * @apiName anchor_save
	 * @apiGroup admin
	 *
	 * @apiSampleRequest /api/admin/anchor/save
	 *
	 * @apiParam {Number} admin_id 管理员唯一ID
	 * @apiParam {String} account 登录账号
	 * @apiParam {String} sign 校验签名
	 * @apiParam {Number} status 1通过 2拒绝
	 * @apiParam {Number} id 申请ID
	 *
	 * @apiSuccess {Number} status 接口状态 0成功 其他异常
	 * @apiSuccess {String} message 接口信息描述
	 * @apiSuccess {String} data 接口数据集
	 *
	 * @apiSuccessExample {json} Success-Response:
	 * {
	 *	    "data": "",
	 *	    "status": 0,
	 *	    "message": ""
	 *	}
	 *
	 * @apiErrorExample {json} Error-Response:
	 * {
	 * 	   "data": "",
	 *     "status": -1,
	 *     "message": "签名校验错误"
	 * }
	 */
	public function save()
	{
		$id = $this->input->get_post('id');
		$status = $this->input->get_post('status');

		$this->load->model('Users_anchor_model');
		if($anchor = $this->Users_anchor_model->get($id)){
			if(! $anchor['status']){
				if($this->Users_anchor_model->update($id, ['status' => $status])){
					$this->load->model('Users_model');
					if($status == 1){
						$this->Users_model->update($anchor['user_id'], ['anchor' => 1]);
					}
					$this->ajaxReturn();
				}else{
					$this->ajaxReturn([], 3, '操作失败');
				}
			}else{
				$this->ajaxReturn([], 2, '请勿重复审核');
			}
		}else{
			$this->ajaxReturn([], 1, '讲师ID错误');
		}

	}

	protected function check_params($act, $params)
	{
		switch($act){
			case 'add':
				break;
			case 'edit':
				break;
		}
	}
}
