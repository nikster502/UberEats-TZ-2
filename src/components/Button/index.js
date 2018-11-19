import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";

class Submit extends Component {
    render() {
        const { children, black, white, ...other } = this.props;


        const classes = classNames({
            'header-btn': true,
            "header-btn--black": black,
            "header-btn--white": white,

        });

        return (
            <button className={classes} type='button' {...other}>
                {children}
            </button>
        );
    }
}

export default Submit;