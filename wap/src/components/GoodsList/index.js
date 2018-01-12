import React from 'react';
import {BaseComponent,Base} from '../../common';
import {Flex,Button} from 'antd-mobile';
import './GoodsList.less';


class Item extends BaseComponent {

    render(){
        const {goodsImg,goodsTit,goodsPrice,goodsNum} = this.props;
        return (
            <div className="recommend-goodsItem" onClick={() => Base.push('GoodsDetail', {goodsNum})}>
                <div className="recommend-goodsItem-img">
                    <img src={goodsImg} alt=""/>
                </div>
                <div className="recommend-goodsItem-body">
                    <div className="recommend-goodsItem-title ellipsis2">
                        {goodsTit}
                    </div>
                    <Flex justify="between" className="recommend-goodsItem-opera">
                        <span className="goodsPrice">￥ {goodsPrice}</span>
                        <Button type="warning" inline size="small">购买</Button>
                    </Flex>
                </div>
            </div>
        )
    }
}

export class GoodsList extends BaseComponent{
	render(){
		const {goodslist} = this.props;
		const item = goodslist.map((item,index)=>{
            return <Item key={index} {...item} />
        });
		return (
			<Flex wrap="wrap" className="recommend-goods GoodsList">
				{item}
	        </Flex>
		)
	}
};
