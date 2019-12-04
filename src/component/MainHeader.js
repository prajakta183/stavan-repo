import React, { Component } from 'react';

export default class MainHeader extends Component {
    render() {
        return (
            <div>
                {/* <!-- Header_Area --> */}
                <nav class="navbar navbar-default header_aera" id="main_navbar">
                    <div class="container">
                        {/* <!-- searchForm --> */}
                        <div class="searchForm">
                            <form action="#" class="row m0">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-search"></i></span>
                                    <input type="search" name="search" class="form-control" placeholder="Type & Hit Enter" />
                                    <span class="input-group-addon form_hide"><i class="fa fa-times"></i></span>
                                </div>
                            </form>
                        </div>
                        {/* <!-- End searchForm --> */}
                        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                        <div class="col-md-2 p0">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#min_navbar">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand" href="index.html"><img src="http://localhost:3000/assests/images/logo.png" alt="" /></a>
                            </div>
                        </div>

                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div class="col-md-10 p0">
                            <div class="collapse navbar-collapse" id="min_navbar">
                                <ul class="nav navbar-nav navbar-right">
                                    <li class="dropdown submenu">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Home</a>

                                    </li>
                                    <li class="dropdown submenu">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">About Us</a>

                                    </li>
                                    <li class="dropdown submenu">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services</a>
                                        <ul class="dropdown-menu other_dropdwn">
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="services-2.html">Services-2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Gallery</a></li>
                                    <li class="dropdown submenu">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog</a>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="#" class="nav_searchFrom"><i class="fa fa-search"></i></a></li>
                                </ul>
                            </div>
                            {/* <!-- /.navbar-collapse --> */}
                        </div>
                    </div>
                    {/* <!-- /.container --> */}
                </nav>
                {/* <!-- End Header_Area --> */}
            </div>
        )
    }
}