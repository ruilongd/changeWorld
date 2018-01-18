/*
 * @Author: daihanqiao@126.com 
 * @Date: 2017-12-31 13:18:13 
 * @Last Modified by: daihanqiao@126.com
 * @Last Modified time: 2018-01-01 22:55:36
 * 全局数据
 */
import { observable } from 'mobx';
export default {
	// API_URL:'http://aiping.qichebaby.com/api',
    API_URL:'http://192.168.1.138/project/taskusbipowggnphe/php/index.php/api',
    store: observable({
        isCollapsed: false, // menu是否收起
    }),
    userInfo: {
        name: '代汉桥',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    }
}