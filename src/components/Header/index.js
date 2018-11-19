import React, { Component } from "react";
import classNames from "classnames";
import SearchInput from "../SearchInput"
import DeliveryInput from "../DeliveryInput"
import Input from "../Input"
import "./style.css";
import Menu from "../Menu";
import MediaQuery from "react-responsive";


class Header extends Component {
    render() {
        const { children, color, ...other } = this.props;


        const classes = classNames({
            btn: true,
            "btn--color": color,

        });

        return (

            <div className='header'>
              <Menu/>

                <section className="header-section">
                <SearchInput
                    component={Input}
                    placeholder = 'Search for restaurant or cuisine'
                />


                    <MediaQuery query="(max-device-width: 767px)">
                <div className='header_deliveryContainer '>
                    <div className='header_deliveryСase header_deliveryСase__when '>
                        <label className='header_deliveryLabel'>When</label>
                        <Input className = 'header_deliveryWhen header_inputDelivery--background'
                               placeholder = 'ASAP'
                        />
                    </div>
                    <div className='header_deliveryСase header_deliveryСase__to'>
                        <label className='header_deliveryLabel '>to</label>
                        <DeliveryInput
                            className = 'header_deliveryTo header_inputDelivery--background'
                            component={Input}
                            placeholder = 'ul. Bolshaya Dmitrovka,22 '
                        />
                    </div>
                </div>
                    </MediaQuery>
                </section>

            </div>

        );
    }
}

export default Header;