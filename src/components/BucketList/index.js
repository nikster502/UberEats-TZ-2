import React, { Component } from "react";
import "./style.css";
import {connect} from 'react-redux';

class BucketList extends Component {
    render() {
        const { header,warn,index, desc, ...other} = this.props;
        if (!warn) {

            this.props.bucket.map((bucket,index) =>
             console.log(bucket.product.price))




            return null;
        }
        return (

            <div className="modall">
                <h2>Корзина</h2>
                <ul>
                    {
                        this.props.bucket.map((bucket,index) =>
                           <li key = {index}>
                               {bucket.product.productName+" price "+ bucket.product.price}
                               </li>

                    )}

                </ul>
            </div>
    );
    }

}
export default connect(
    state => ({
        bucket :state.bucket
    }),
    dispatch => ({
        onAddToBucket: (product) => {
            console.log("product add to bucket ",product)
            const payload ={
                product
            }
            dispatch({type : 'ADD_TO_BUCKET', payload: payload});
        },
    })
) (BucketList);