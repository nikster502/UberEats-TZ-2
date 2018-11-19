import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
// import logo from './img/logo.svg'

class Logo extends Component {

    render() {
        const { logoProp, styleImg, href, ...other } = this.props;
        var logo = "../img/logo.svg";
        if(!!logoProp){
            logo = logoProp
        }

        const classes = classNames({
            "form__image":  !styleImg,
            [styleImg] : !!styleImg

        });

        return (
            <div className={classes}>
                <a href='#'><img src={logo}/></a>
            </div>
        );
    }
}

export default Logo;