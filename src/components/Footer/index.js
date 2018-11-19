import React, { Component } from "react";
import classNames from "classnames";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Logo from "../Logo"
import "./style.css";
import ComboBox from '../ComboBox';
import Socials from '../Socials';
import Stores from '../Stores';
import $ from "jquery";

class Header extends Component {
    render() {
        $(document).ready(function(){
            $('.content').append('<a href="#" class="go-top" title="Вверх"><img class= "go-top_shape"src="./img/shape.svg" alt=""></a>');
        });

        $(function() {
            $.fn.scrollToTop = function() {
                $(this).hide().removeAttr("href");
                if ($(window).scrollTop() >= "500") $(this).fadeIn("slow")
                var scrollDiv = $(this);
                $(window).scroll(function() {
                    if ($(window).scrollTop() <= "500") $(scrollDiv).fadeOut("slow")
                    else $(scrollDiv).fadeIn("slow")
                });
                $(this).click(function() {
                    $("html, body").animate({scrollTop: 0},"slow")
                })
            }
        });

        $(function() {
            $(".go-top").scrollToTop();
        });

        const { children, color, ...other } = this.props;


        const classes = classNames({
            btn: true,
            "btn--color": color,

        });

        return (

            <div className='foother'>
                <div className="foother-container">


                    <Logo logoProp = "./img/footerLogo.svg" styleImg={"footer-logo"}/>
                <div className="container-line">
                    <hr className='footer-line' />
                </div>
                    <div className="foother-containerLink">
                    <Grid fluid>
                        <Row>
                            <Col className="foother-linkGrid" xs={12} sm={4} md={4} lg={4}>
                <ComboBox/>
                    <div className="hashtag">

                            <div className="hashtag-sign">
                                #
                            </div>
                            <div className="hashtag-text">
                                UberEats
                            </div>
                    </div>
                    <Socials/>
                        </Col>


                            <Col className="foother-linkGrid" xs={12} sm={4} md={4}  lg={4}>
                                <div className="foother-links">
                                    About UberEats
                                </div>
                                <div className="foother-links">
                                    Become a Delivery Partner
                                </div>
                                <div className="foother-links">
                                    Become a Restaurant Partner
                                </div>

                            </Col>



                            <Col className="foother-linkGrid" xs={12} sm={4} md={4}  lg={4}>
                                <div className="foother-links">
                                    See all cities
                                </div>
                                <div className="foother-links">
                                    Pricing
                                </div>
                                <div className="foother-links">
                                    Help
                                </div>
                                <div className="foother-links">
                                    FAQs
                                </div>
                            </Col>
                        </Row>
                </Grid>
                        <div className="container-line">
                            <hr className='footer-line' />
                        </div>
                        <Stores/>
                        <div className="container-line">
                            <hr className='footer-line' />
                        </div>
                </div>
                </div>

                <div className="foother-container footer-item">

                <Row>
                    <Col className="foother-linkGrid" xs={12} sm={4} md={4}  lg={4}>
                        <div className="foother-links">
                            © 2017 Uber Technologies Inc.
                        </div>
                    </Col>
                    <Col className="foother-linkGrid" xs={12} sm={4} md={4}  lg={4}>
                        <div className="foother-links">
                            Privacy
                        </div>
                    </Col>
                    <Col className="foother-linkGrid" xs={12} sm={4} md={4}  lg={4}>
                        <div className="foother-links">
                            Terms
                        </div>
                    </Col>
                </Row>

                </div>

            </div>

        );
    }
}

export default Header;