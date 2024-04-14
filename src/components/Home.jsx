import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">

                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div id="carouselExampleIndicators" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="/Imgs/1.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/Imgs/2.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/Imgs/3.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>


                            </div>
                            <br /><br />

                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <p>Deals!</p>
                                <div className="row g-3">
                                    <div className="col-col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-4">
                                        <div class="card" >
                                            <img src="https://m.media-amazon.com/images/I/81B8dGcc0hL._SX695_.jpg" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text">White Sneakers
                                                    Rs.200</p>
                                                <a href="/Buy" class="btn btn-primary">Buy Now</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-4">
                                        <div class="card" >
                                            <img src="https://m.media-amazon.com/images/I/81B8dGcc0hL._SX695_.jpg" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text">White Sneakers
                                                    Rs.200</p>
                                                <a href="/Buy" class="btn btn-primary">Buy Now</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-4">
                                        <div class="card" >
                                            <img src="https://m.media-amazon.com/images/I/81B8dGcc0hL._SX695_.jpg" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text">White Sneakers
                                                    Rs.200</p>
                                                <a href="/Buy" class="btn btn-primary">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-4">
                                        <div class="card" >
                                            <img src="https://m.media-amazon.com/images/I/81B8dGcc0hL._SX695_.jpg" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text">White Sneakers
                                                    Rs.200</p>
                                                <a href="/Buy" class="btn btn-primary">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <br /><br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <a href="/view" class="btn btn-primary">More</a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Home