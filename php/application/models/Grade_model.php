<?php
/*
 * 等级经验设置
 * @author sz.ljx
 * @author webljx@163.com
 * @link www.aicode.org.cn
 */

class Grade_model extends MY_Model
{
    public $_table = 'grade';
    public $primary_key = 'id';
    public $before_create = array('created_at', 'updated_at', 'updated_valid');
    public $before_update = array('updated_at', 'updated_valid');
    public $protected_attributes = array('id');

    public function __construct()
    {
        parent::__construct();
    }

    public function exp_to_grade($exp)
    {
        $ret = ['before_grade_name' => '', 'grade_name' => '', 'after_grade_name' => '', 'diff' => 0, 'exp' => $exp];

        $order_by = array('grade_demand' => 'asc');
        if ($one = $this->Grade_model->order_by($order_by)->get_by(['enable' => 1, 'grade_demand <' => $exp])) {
            $ret['before_grade_name'] = $one['grade_name'];
        }

        if ($one = $this->Grade_model->order_by($order_by)->get_by(['enable' => 1, 'grade_demand' => $exp])) {
            $ret['grade_name'] = $one['grade_name'];
        } else {
            $ret['grade_name'] = $ret['before_grade_name'];
        }

        if ($one = $this->Grade_model->order_by($order_by)->get_by(['enable' => 1, 'grade_demand >' => $exp])) {
            $ret['after_grade_name'] = $one['grade_name'];
            $ret['diff'] = $one['grade_demand'] - $exp;
        }

        return $ret;
    }

    /**
     * 取得当前经验值所在的等级相关信息
     * @param $exp
     * @return array
     * [
     *  exp => 当前经验,
     *  grade_name => 当前等级,
     *  before_grade_name => 上一等级名
     *  after_grade_name => 下一等级名
     *  diff => 升级经验差
     * ]
     */
    public function expDiff($exp)
    {
        $ret = [];
        $grades = $this->db->where('deleted', 0)->where('status', 0)->where('enable', 1)->select('*')->get($this->table())->result_array();
        $arrGrades = [];
        foreach ($grades as $key => $grade) {
            $arrGrades["level_{$grade['grade_name']}"] = $grade;
        }
        foreach ($arrGrades as $key => $grade){
            list($keyword, $level) = explode('_', $key);
            $level_pre = $level - 1;
            $level_next = $level + 1;
            if($grade['grade_demand'] >= $exp){
                $ret['grade_name'] = $grade['grade_name'];

                if(isset($arrGrades["level_{$level_pre}"])){
                    $ret['before_grade_name'] = $arrGrades["level_{$level_pre}"]['grade_name'];
                }else{
                    $ret['before_grade_name'] = $grade['grade_name'];
                }

                if(isset($arrGrades["level_{$level_next}"])){
                    $ret['after_grade_name'] = $arrGrades["level_{$level_next}"]['grade_name'];
                    $ret['diff'] = $arrGrades["level_{$level_next}"]['grade_demand'] - $exp;
                }else{
                    $ret['after_grade_name'] = $grade['grade_name'];
                    $ret['diff'] = 0;
                }
                break;
            }
        }

        $ret['exp'] = $exp;
        return $ret;
    }
    public function exp_diff($exp){
        $ret = ['before' => '', 'this' => '', 'after' => '', 'diff' => 0, 'exp' => $exp];

        $order_by = array('grade_demand' => 'asc');
        if ($one = $this->Grade_model->order_by($order_by)->get_by(['enable' => 1, 'grade_demand <' => $exp])) {
            $ret['before'] = $one;
        }

        if ($one = $this->Grade_model->order_by($order_by)->get_by(['enable' => 1, 'grade_demand >' => $exp])) {
            $ret['after'] = $one;
            $ret['diff'] = $one['grade_demand'] - $exp;
        }

        if ($one = $this->Grade_model->order_by($order_by)->get_by(['enable' => 1, 'grade_demand < ' => $ret['after']['grade_demand'], 'grade_demand >=' =>  $ret['before']['grade_demand']])) {
            $ret['this'] = $one;
        }

        return $ret;
    }

    public function exp($id)
    {

        $this->load->model('Rank_rule_model');

        $ret = $this->Rank_rule_model->get_by(['id' => $id]);
        $ret['icon'] = config_item('base_url') . $ret['icon'];

        return $ret;
    }

    public function getLevelByUsers($users)
    {
        $order_by = array('grade_demand' => 'desc');
        $this->db->where(['deleted' => 0]);
        $exps = $this->order_by($order_by)->get_all();

        foreach ($users as $key=> &$user){
            foreach ($exps as $exp){
                if($user['exp'] >= $exp['grade_demand']){
                    $user['level'] = $exp['grade_name'];
                    break;
                }
            }
        }

        return $users;
    }


    public function rule()
    {
        $this->load->model('Config_model');
        $config = $this->Config_model->siteConfig();
        $rule = 'rule_grade';
        return isset($config[$rule]) ? $config[$rule] : '';
    }

}
