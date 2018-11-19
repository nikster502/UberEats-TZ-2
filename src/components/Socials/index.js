import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import SocialIco from "../Social-icon"


class SocialIcon extends Component {

    render() {
        const { logoProp, styleImg, href, ...other } = this.props;

        const classes = classNames({
            "socials-container":  true,
            [styleImg] : !!styleImg

        });

        return (
            <div className={classes}>
                <SocialIco IcoProp = "./img/facebookIco.svg"/>
                <SocialIco IcoProp = "./img/twiterIco.svg"/>
                <SocialIco IcoProp = "./img/instagramIco.svg"/>
            </div>
        );
    }
}

export default SocialIcon;