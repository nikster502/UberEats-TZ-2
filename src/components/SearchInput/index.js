import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import searchLoup from './svg/loup.svg'
const blurModifier = "input--hasValue";
const focusModifier = "input--hasFocus";
class SearchInput extends Component {

    state = {
        isFocused: false
    };
    handleFocusChange = e => { //не понял
        this.props.onFocus(e);
        this.setState({ isFocused: true });
    };

    handleBlurChange = e => {
        this.props.onBlur(e);
        this.setState({ isFocused: false });
    };

    handleChange = value => this.props.onChange(value);

    render() {
        const {
            id,
            error,
            label,
            className,
            valid,
            value,
            component,
            onFocus,
            onBlur,
            ...other
        } = this.props;
        const { isFocused } = this.state;

        const Comp = component;

        const classes = classNames(
            "header_inputSearch",
            {
            [focusModifier]: isFocused,
            [blurModifier]: !!value,
            [className] : !!className
        });
        return (
            <div className='header_search'>
                <div className='header-searchLoup'>
                    <img  src={searchLoup} alt="loup"/>
                </div>
                    {!!component && (
                        <Comp
                            {...other}
                            valid={valid}
                            value={value}
                            onChange={this.handleChange}
                            onFocus={this.handleFocusChange}
                            onBlur={this.handleBlurChange}
                            id={id}
                            className={classes}
                        />
                    )}
            </div>


    );
    }
}

export default SearchInput;