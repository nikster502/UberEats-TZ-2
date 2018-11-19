import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import Store from "../Store"


class Stores extends Component {

    render() {
        const { logoProp, styleImg, href, ...other } = this.props;

        const classes = classNames({
            "store-container":  true,
            [styleImg] : !!styleImg

        });

        return (
            <div className={classes}>
                <Store IcoProp = "./img/appStore.svg"/>
                <Store IcoProp = "./img/googlePlay.svg"/>
            </div>
        );
    }
}

export default Stores;