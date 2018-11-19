import React, { Component } from "react";
import "./style.css";
import {connect} from 'react-redux';
class Modal extends Component {
    render() {
        const { header,warn,index, desc, ...other} = this.props;
        if (!warn) {
            return null;
        }
        return (
            <div className='modal-contamer'>
                <aside className="modal" id="modal">
                    {/*<button className="btn" >Закрыть</button>*/}
                    <header>
                        <h2>{header}</h2>
                    </header>
                    <section>
                        {desc}
                    </section>
                </aside>
            </div>

    );
    }

}
export default connect(
    state => ({
        products :state.products,
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
) (Modal);