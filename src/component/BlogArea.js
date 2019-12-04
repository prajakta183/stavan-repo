import React, { Component } from 'react';

export default class BlogArea extends Component {
    render() {
        return (
            <div>
{/* <!-- Our Latest Blog Area --> */}
    <section class="latest_blog_area">
        <div class="container">
            <div class="tittle wow fadeInUp">
                <h2>Our Latest Blog</h2>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
            </div>
            <div class="row latest_blog">
                <div class="col-md-4 col-sm-6 blog_content">
                    <img src="http://localhost:3000/assests/images/blog/lb-1.jpg" alt=""/>
                    <a href="#" class="blog_heading">Our Latest Project</a>
                    <h4><small>by  </small><a href="#">Emran Khan</a><span>/</span><small>ON </small> October 15, 2016</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna. Sed sollicitudin at nisi sed accumsan... <a href="#">Read More</a></p>
                </div>
                <div class="col-md-4 col-sm-6 blog_content">
                    <img src="http://localhost:3000/assests/images/blog/lb-2.jpg" alt=""/>
                    <a href="#" class="blog_heading">Our Latest Project</a>
                    <h4><small>by  </small><a href="#">Prodip Ghosh</a><span>/</span><small>ON </small> October 15, 2016</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna. Sed sollicitudin at nisi sed accumsan... <a href="#">Read More</a></p>
                </div>
                <div class="col-md-4 col-sm-6 blog_content">
                    <img src="http://localhost:3000/assests/images/blog/lb-3.jpg" alt=""/>
                    <a href="#" class="blog_heading">Our Latest Project</a>
                    <h4><small>by  </small><a href="#">Prodip Ghosh</a><span>/</span><small>ON </small> October 15, 2016</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna. Sed sollicitudin at nisi sed accumsan... <a href="#">Read More</a></p>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Our Latest Blog Area --> */}

            </div>
        )
    }
}