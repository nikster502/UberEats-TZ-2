import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";


class Store extends Component {

    render() {
        const { IcoProp, styleImg, href, ...other } = this.props;

        var ico = "./img/appStore.svg";
        var link = "#";

        if(!!IcoProp){
            ico = IcoProp
        }
        if(!!href){
            link = href
        }
        const classes = classNames({
            "store-ico":  true,
            [styleImg] : !!styleImg

        });

        return (
            <div className={classes}>
                <a href={link}><img src={ico}/></a>
            </div>
        );
    }
}

export default Store;