<?php
defined('BASEPATH') or exit('No direct script access allowed');
/*
 * 公共接口
 * @author sz.ljx
 * @email webljx@163.com
 * @link www.aicode.org.cn
 */
use Gregwar\Captcha\CaptchaBuilder;
use Gregwar\Captcha\PhraseBuilder;

class Common extends API_Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    //验证码
    public function captcha()
    {
        $phraseBuilder = new PhraseBuilder(4, '0123456789');
        $builder = new CaptchaBuilder(null, $phraseBuilder);
        $builder->build(80, 44);
        $this->session->set_userdata('captcha', $builder->getPhrase());
        $this->ajaxReturn($builder->inline());
        exit();
    }

    //图片上传
    public function ajaxFileUpload()
    {
        $ret = array();
        $config['filepath']  = './uploads/';
        $config['allowtype'] = array('gif', 'jpg', 'png', 'jpeg');
        $this->load->library('Myupload', $config);
        if (!$this->myupload->uploadFile('upload_file')) {
            $this->ajaxReturn('', 1, $this->myupload->getErrorMsg(), true);
        } else {
            $data = array('file' => '/uploads/'.$this->myupload->getNewFileName());
            $this->ajaxReturn($data, 0, '', true);
        }
    }

    /**
     * @api {get} /api/common/sms 短信
     * @apiVersion 1.0.0
     * @apiName common_sms
     * @apiGroup api
     *
     * @apiSampleRequest /api/common/sms
     *
     * @apiParam {Number} sms_id 短信模板 0注册
     * @apiParam {String} mobi 获取验证码手机号
     *
     * @apiSuccess {Number} status 接口状态 0成功 其他异常
     * @apiSuccess {String} message 接口信息描述
     * @apiSuccess {String} data 接口数据集
     *
     * @apiSuccessExample {json} Success-Response:
     * {
     *      "data": "",
     *      "status": 0,
     *      "message": "成功"
     *  }
     *
     * @apiErrorExample {json} Error-Response:
     * {
     *     "data": "",
     *     "status": 1,
     *     "message": "验证码发送频率为: 180秒/次"
     * }
     */
    public function sms()
    {
        $sms_id = (int)$this->input->get_post('sms_id');
        $mobi = $this->input->get_post('mobi');
        if(!$mobi){
            $this->ajaxReturn('', 1, '获取验证码手机号错误');
        }
        if($sms_id == 0){
            $this->load->model('Users_model');
            $user = $this->Users_model->get_by('mobi', $mobi);
            if($user){
                $this->ajaxReturn('', 1, '手机号已注册');
            }
        }

        // 记录
        $this->load->model('Sms_email_record_model');
        $data = array('account' => $mobi);
        $this->Sms_email_record_model->insert($data);

        // 发送

        $this->ajaxReturn();
    }

    //发生邮件
    public function mail()
    {
        $sms_id = (int)$this->input->get_post('sms_id');
        $email = $this->input->get_post('email');

        $this->load->model('Sms_model');
        $this->load->helper('string');
        $code = random_string('numeric', 4);
        $timeout = 120;
        if($this->Sms_model->getLastVerify($email, $timeout)){
            $this->ajaxReturn('', 1, '发送邮件频率'.$timeout.'秒/次');
        }

        $ret = $this->Sms_model->send_mail($email, $sms_id, array('code' => $code));
        if($ret['status'] == 0){
            $this->ajaxReturn();
        }else{
            $this->ajaxReturn('', $ret['status'], $ret['message']);
        }
    }

    /**
     * @api {get} /api/common/area 地区
     * @apiVersion 1.0.0
     * @apiName common_area
     * @apiGroup api
     *
     * @apiSampleRequest /api/common/area
     *
     * @apiParam {Number} pid 上级ID 0表示顶级
     *
     * @apiSuccess {Number} status 接口状态 0成功 其他异常
     * @apiSuccess {String} message 接口信息描述
     * @apiSuccess {Object[]} data 接口数据集
     * @apiSuccess {String} data.id 地区唯一ID
     * @apiSuccess {String} data.name 地区名称
     * @apiSuccess {String} data.pid 地区上级ID
     * @apiSuccess {String} data.first_letter 首字母
     *
     * @apiSuccessExample {json} Success-Response:
     * {
     *      "data": [
     *          {
     *               "id": "110000",
     *               "name": "北京",
     *               "pid": "0",
     *               "first_letter": "B"
     *           },
     *           {
     *               "id": "120000",
     *               "name": "天津",
     *               "pid": "0",
     *               "first_letter": "T"
     *           }
     *      ],
     *      "status": 0,
     *      "message": "成功"
     *  }
     *
     * @apiErrorExample {json} Error-Response:
     * {
     *     "data": "",
     *     "status": -1,
     *     "message": "签名校验错误"
     * }
     */
    public function area()
    {
        $pid = (int)$this->input->get_post('pid');
        $this->load->model('Area_model');
        $this->db->select('id,name,pid,first_letter');
        $area = $this->Area_model->get_many_by('pid', $pid);
        $this->ajaxReturn($area);
    }
}