import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";


const blurModifier = "input--hasValue";
const focusModifier = "input--hasFocus";

class TextInput extends Component {
    // handleBlur = e => {
    //     this.props.onBlur(e);
    // };
    //
    // handleFocus = e => {
    //     this.props.onFocus(e);
    // };
    //
    // handleChange = e => {
    //     this.props.onChange(e);
    // };

    render() {
        const {
            inputRef,
            value,
            className,
            onChange,
            onFocus,
            onBlur,
            valid,
            ...other
        } = this.props;
        const classes = classNames(
            "header_input",
            {
            [className]: !!className,
            "input--valid": valid
        });

        return (
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
                className={classes}
                {...other}
            />
        );
    }
}

export default TextInput;