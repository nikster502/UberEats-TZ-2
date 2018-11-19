import React, { Component } from "react";
import classNames from "classnames";
import { Grid, Row, Col } from 'react-flexbox-grid';
import "./style.css";
import Dish from '../Dish';
import {connect} from 'react-redux';
let from=0;
let before=9999999999;
class DishGrid extends Component {
    
    
    findProduct(){
        console.log(" findProduct Name", this.searchInputName.value);
        //
        // from = this.searchInputFrom.value === ''? 0 : this.searchInputFrom.value;
        //
        // before = this.searchInputBefore.value ==='' ? 1000000 : this.searchInputBefore.value;
        // console.log(" findProduct from",from);
        // console.log(" findProduct before", before);
        this.props.onFindProduct(this.searchInputName.value);
    }
        render() {
        const {  } = this.props;

        // const parsedJSON = JSON.parse(products);
        const classes = classNames({
        });
// console.log("products - ",JSON.parse(this.props.products))
        return (
                <section className="content">

                    <h1 className="content-city">Moscow Restaurants</h1>
                    <div className="filter fiter-name">
                        <input className = '' type="text"ref ={(input)=>{this.searchInputName = input}}/>
                        <button className='' onClick={this.findProduct.bind(this)}>отфильтровать по названию</button>
                    </div>

                    {/*<div className="filter filter-price">*/}
                        {/*<div>от</div>*/}
                        {/*<input type="text" ref ={(input)=>{this.searchInputFrom = input}}/>*/}
                        {/*<div>до</div>*/}
                        {/*<input type="text"ref ={(input)=>{this.searchInputBefore = input}}/>*/}
                        {/*<button>отфильтровать по цене</button>*/}
                    {/*</div>*/}

                    <Grid fluid>
                        <Row>
                            {
                                this.props.products.map((product,index) =>{
                                    return(<Dish key = {index}
                                        srcImg= {product.urlImg}
                                        dishName ={product.productName}
                                        dishPrice ={product.price+" ₽ • Бургеры"}
                                        dishTime = "25 - 35 Min"
                                                 indexBucket = {index}
                                                 desc = {product.desc}
                                    />);
                                })
                            }
                        </Row>
                    </Grid>
                </section>
        );
    }
}
export default connect(

    state => ({
        products : state.products.filter(product => (product.productName.includes(state.filterProducts)))
    }),
    dispatch => ({

onFindProduct:(name)=>{
    console.log(name);

    dispatch({type : 'FIND_PRODUCT',payload:name});
}
    })
)(DishGrid);
