import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div class="preloader"></div>

                <section class="top_header_area">
                    <div class="container">
                        <ul class="nav navbar-nav top_nav">
                            <li><a href="#"><i class="fa fa-phone"></i>+91 9768929724</a></li>
                            <li><a href="#"><i class="fa fa-envelope-o"></i>stavaninfo@gmail.com</a></li>
                            <li><a href="#"><i class="fa fa-clock-o"></i>Mon - Sat 12:00 - 20:00</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right social_nav">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}