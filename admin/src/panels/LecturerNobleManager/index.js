import React from 'react';
import {action} from 'mobx';
import {BaseComponent,Base,Global} from '../../common';
import { Table, Input,Popconfirm,Switch,Button,Spin,message ,Upload,Icon,Select} from 'antd';
import './LecturerNobleManager.less';
import {remove} from 'lodash';
const Option = Select.Option;
export default class LecturerNobleManager extends BaseComponent{
	store={
		list:[],
		positionList:[
			// {
            //     name: "日",
            //     id: "1"
			// },
			{
                name: "月",
                id: "2"
			},
			// {
            //     name: "季",
            //     id: "3"
			// },
			// {
            //     name: "年",
            //     id: "4"
            // },
		]
	}
	constructor(props) {
		super(props);
		this.columns = [
			{
				title: '排序',
				dataIndex: 'sort',
				width: '10%',
				render: (text, record) => this.renderInput(text, record, 'sort'),
			}, 
			// {
			// 	title: 'id',
			// 	dataIndex: 'id',
			// 	width: '10%',
			// }, 
			{
				title: '等级',
				dataIndex: 'name',
				render: (text, record) => this.renderInput(text, record, 'name'),
			}, 
			{
				title: '图标',
				dataIndex: 'icon',
				render: (text, record) => this.renderImg(text, record, 'icon'),
			}, 
			{
				title: '首开金额',
				dataIndex: 'first_fee',
				render: (text, record) => this.renderInput(text, record, 'first_fee'),
			}, 
			{
				title: '首开赠送',
				dataIndex: 'first_gold',
				render: (text, record) => this.renderInput(text, record, 'first_gold'),
			}, 
			{
				title: '续费金额',
				dataIndex: 'renew_fee',
				render: (text, record) => this.renderInput(text, record, 'renew_fee'),
			}, 
			{
				title: '续费赠送',
				dataIndex: 'renew_gold',
				render: (text, record) => this.renderInput(text, record, 'renew_gold'),
			}, 
			{
				title: '天数',
				dataIndex: 'days',
				render: (text, record) => this.renderInput(text, record, 'days'),
			},
			{
				title: '单位',
				dataIndex: 'unit',
				// render: (text, record) => this.renderInput(text, record, 'unit'),
				render: (text, record) => this.renderSelect(text, record, "unit")
			},
			{
				title: '启用',
				dataIndex: 'enable',
				width: '15%',
				render: (text, record) => this.renderSwitch(text, record, 'enable'),
			}, 
			{
				title: '操作',
				dataIndex: 'operation',
				width: '15%',
				render: (text, record) => {
					const { editable,id } = record;
					return (
					<div className="editable-row-operations">
						{
						editable ?
							<span>
								<a onClick={() => this.onSave(id)}>保存</a>
								<a className='ml10 gray' onClick={() => this.onCancel(id)}>取消</a>
							</span>
							:
							<span>
								<a onClick={() => this.onEditChange(id,true,'editable')}>编辑</a>
								<Popconfirm title="确认删除?" okText='确定' cancelText='取消' onConfirm={() => this.onDelete(id)}>
									<a className='ml10 gray'>删除</a>
								</Popconfirm>
							</span>
						}
					</div>
					);
				},
			}
		];
	}
	renderInput(text, record, column){
		const {editable} = record;
		return (
			<div>
				{editable
					? <Input style={{ margin: '-5px 0' }} value={text} type={column==='sort'?'number':'text'} onChange={e => this.onEditChange(record.id, e.target.value, column)} />
					: text
				}
			</div>
		)
	}
	renderImg(text,record,column){
		const {editable,icon,loading} = record;
		return <div>
			{editable?<Upload
				withCredentials={true}
				name="field"
				data={{'field':'field'}}
				listType="picture-card"
				showUploadList={false}
				action={Global.UPLOAD_URL}
				onChange={(e)=>this.onUploadChange(e,record.id)}
			>
				{icon?<img className='img-uploader' style={{width:'120px'}} src={Base.getImgUrl(icon)} alt=''/>:<div>
					<Icon type={loading ? 'loading' : 'plus'} />
					<div className="ant-upload-text">上传</div>
				</div>}
			</Upload>:<img className='img-uploader'  style={{width:'120px'}} src={Base.getImgUrl(icon)} alt=''/>}
		</div>
	}
	renderSelect(text, record, column){
		const value = record[column];
        const { positionList } = this.store;
        let curIndex = positionList.findIndex(item => item.name === value);
        curIndex = curIndex >= 0 ? curIndex : 0;
        return (
            <div>
                {record.editable ? (
                    <Select
                        defaultValue={value || positionList[0].name}
                        style={{ width: 120 }}
                        onChange={value =>
                            this.onEditChange(record.id, value, column)
                        }
                    >
                        {positionList.map(({ id, name }) => (
                            <Option key={id} value={id}>
                                {name}
                            </Option>
                        ))}
                    </Select>
                ) : (
                    positionList[curIndex].name
                )}
            </div>
        );
	}
	renderSwitch(text,record,column){
		return (
			<Switch checked={parseInt(record.enable,10)===1} onChange={(value)=>this.onSwitch(record.id,value?1:0,column)} />
		)
	}
	//编辑
	@action.bound
	onEditChange(id,value,column) {
		const list = this.store.list.slice();
		const itemData = list.find(item=>id === item.id);
		itemData[column] = value;
		this.store.list = list;
	}
	//保存
	@action.bound
	onSave(id) {
		const list = this.store.list.slice();
		const itemData = list.find(item=>id === item.id);
		itemData.unit = ['日','月','季','年'][itemData.unit - 1];
		Base.POST({act:'vip',op:'save',mod:'admin',...itemData},(res)=>{
			itemData.editable = false;
			itemData.updated_at = Base.getTimeFormat(new Date().getTime()/1000,2);
			itemData.id === 0 && (itemData.id = res.data.id);
			this.store.list = list;
			this.cacheData = list.map(item => ({ ...item }));
		},this);
	}
	//是否启用
	@action.bound
	onSwitch(id,value,column){
		const list = this.store.list.slice();
		const itemData = list.find(item=>id === item.id);
		itemData[column] = value;
		this.onSave(id);
	}
	//取消
	@action.bound
	onCancel(id) {
		this.store.list = this.cacheData.map(item => ({ ...item }));
	}
	//添加
	@action.bound
	onAdd(){
		if(this.store.list.find(item=>item.id === 0)){
			return message.info('请保存后再新建');
		}
		this.store.list.unshift({id:'',name:'',icon:'',first_fee:'',first_gold:'',renew_fee:'',renew_gold:'',days:'',unit:'',editable:true,deleted:'0',enable:'1'});
	}
	//上传
	@action.bound
	onUploadChange(info,id){
		const list = this.store.list.slice();
		const itemData = list.find(item=>id === item.id);
		if (info.file.status === 'uploading') {
			itemData.loading = true;
			return this.store.list = list;
		}
		if (info.file.status === 'done') {
			itemData.loading = false;
			itemData.icon = info.file.response.data.file_url;
			return this.store.list = list;
		}
	}
	//删除
	@action.bound
	onDelete(id){
		Base.POST({act:'vip',op:'save',mod:'admin',id,deleted:"1"},()=>remove(this.store.list,item=>id === item.id),this);
	}
	componentDidMount() {
		Base.GET({act:'vip',op:'index',mod:'admin'},(res)=>{
			console.log(res);
			this.store.list = res.data;
			this.cacheData = res.data.map(item => ({ ...item }));
		},this);
	}
	render(){
		let {list} = this.store;
		const showList = list.filter(item=>{
			return parseInt(item.deleted,10) === 0;
		})
		return (
			<Spin ref='spin' spinning={false} className='LecturerNobleManager'>
				<Button onClick={this.onAdd}>新增+</Button>
				<Table className="mt16" bordered dataSource={showList} rowKey='id' columns={this.columns} pagination={false} />
			</Spin>
		)
	}
};
