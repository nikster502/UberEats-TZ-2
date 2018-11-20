import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import {Col} from "react-flexbox-grid";
import {connect} from 'react-redux';
import Modal from '../modal';

class Dish extends Component {
    constructor(props) {
        super(props);
        this.state = {showDesc: false}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(prevState => ({
            showDesc: !prevState.showDesc
        }));

    }
    addToBucket(){
        console.log('addToBucet' ,this.props);
        this.props.onAddToBucket(this.props.products[this.props.indexBucket]);
        console.log(this.props.bucket.length);
    }

    showModal(){
        console.log('show modal')
        this.openModal =true;

    }

    render() {
        const {srcImg,altImg,dishName,dishPrice,dishTime,link,indexBucket,desc,...other} = this.props;

        const classes = classNames({});
        return (
            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>

               <div className="content-dish dish">
                   <div className="dish-link" href="" >
                   {/*<img className="dish-img" src="http://eburger.by/wp-content/uploads/2015/03/burger-korolevskiy.jpg" alt={altImg}/>*/}
                   <img className="dish-img" src={srcImg} alt={altImg}/>
                   <h3 className="dish-name">{dishName}</h3>
                   <p className="dish-price">{dishPrice}</p>
                   <p className="dish-time">{dishTime}</p>
                   </div>
                   <Modal warn ={this.state.showDesc}
                          desc = {desc}
                          header ={dishName}
                   />

                   <button className="bnt-bucket" onClick={this.handleToggleClick.bind(this)}>
                      показать описание
                   </button>
                   <button key={indexBucket} className="bnt-bucket" onClick={this.addToBucket.bind(this)}>
                       добавить в корзину
                   </button>
               </div>

            </Col>
        );
    }
}

export default connect(
    state => ({
        products :state.products,
        bucket : state.bucket
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
) (Dish);