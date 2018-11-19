import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import Logo from "../Logo";
import Button from "../Button";
import Input from "../Input";
import DeliveryInput from "../DeliveryInput";
import Busket from "../Basket"
import MediaQuery from "react-responsive";

class Menu extends Component {
    render() {
        const { children, color, ...other } = this.props;

        const classes = classNames({
            btn: true,
            "btn--color": color,
        });
        return (

            <div className='header-menu menu'>
                <div className="menu-container">
                <Logo/>
                    <MediaQuery query="(min-device-width: 768px)">
                        <div className='header_deliveryContainer '>
                            <div className='header_deliveryСase header_deliveryСase__when '>
                                <Input className = 'header_deliveryWhen header_inputDelivery--background'
                                       placeholder = 'ASAP'
                                />
                            </div>
                            <label className='header_deliveryLabel '>to</label>
                            <div className='header_deliveryСase header_deliveryСase__to'>

                                <DeliveryInput
                                    className = 'header_deliveryTo header_inputDelivery--background'
                                    component={Input}
                                    placeholder = 'ul. Bolshaya Dmitrovka,22 '
                                />
                            </div>
                        </div>
                    </MediaQuery>

                    <div className="btn-container">
                <div className='btn-group'>
                    <Button children = 'Sign in' white />
                    <Button children = 'Register' black/>
                </div>
                    <MediaQuery query="(min-device-width: 480px)">
                        <Busket/>
                    </MediaQuery>
                    </div>
                </div>
            </div>
    );
    }
}

export default Menu;