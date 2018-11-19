import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import basket from './svg/basket.svg'
import {connect} from 'react-redux';
import BucketList from '../BucketList'
import Modal from "../modal";
class Basket extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {showDescList: false}
    //     this.showProductsOnBucket = this.showProductsOnBucket.bind(this);
    // }
    // showProductsOnBucket(){
    //
    //     this.setState(prevState => ({
    //         showDescList: !prevState.showDescList
    //     }));
    //     console.log(this.props.bucket)
    // }

    constructor(props) {
        super(props);
        this.state = {showDesc: false}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(prevState => ({
            showDesc: !prevState.showDesc
        }));
console.log(this.state)
    }

    sum() {
        let sum = 0;
        this.props.bucket.map(product=> {
             sum= parseInt(product.product.price)+sum ;
         })
        return sum
    }
     countAndSum() {
         if(this.props.bucket.length>0){
             return(
                 <div className='basket-container'>
                     <div className="basket-count">колличество {this.props.bucket.length}</div>
                     <div className="basket-count">стоимость {this.sum()} руб.</div>
                 </div>)
         }
    }
    render() {
        const {children, color, ...other} = this.props;

        const classes = classNames({
            btn: true,
            "btn--color": color,
        });
        return (
                <div className='header_menu-basket' onClick={this.handleToggleClick.bind(this)}>

                    <img    src={basket} alt="корзина"/>
                    {
                        this.countAndSum()
                    }
                    <BucketList warn ={this.state.showDesc}/>
                </div>
        );
    }
}
export default  connect(
    state => ({
        bucket :state.bucket
    }),
    dispatch => ({
        onShowProductsOnBucket: (product) => {
            const payload ={
            }
            dispatch({type : 'ADD_TRACK', payload: payload});
        },
    })
)(Basket);