import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import Sign from "./svg/sign.svg";


class DishGrid extends Component {
    render() {
        const {  } = this.props;


        const classes = classNames({


        });

        return (
<div className="containier-comboBox ">
    <img className='comboBox-img' src={Sign} alt="sign"/>
    <select className="comboBox">
        <option value="english">English</option>
        <option value="russian">Русский</option>
        <option value="german">German</option>
    </select>
</div>
        );
    }
}

export default DishGrid;