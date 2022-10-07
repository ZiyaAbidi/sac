import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    items: 1
};

const Slider = () => {
    return (
        <div className="banner-slider">
            <div className="main-bg-color ">
                <OwlCarousel className="main_carousel" id="main_carousel" {...options}>
                    <div className="item">
                        <div className="bg-video-wrap">
                            <video loop muted autoPlay>
                                <source src="assets/video/1315929346.mp4" type="video/mp4" />
                            </video>
                            <div className="caption-slider">
                                <h3>Passion for MOBILitY drives us</h3>
                                <h2>Client Services</h2>
                                <p>Ihr Partner in strategischen Transformationsprozessen</p>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="bg-video-wrap">
                            <video loop muted autoPlay>
                                <source src="assets/video/1289360406.mp4" type="video/mp4" />
                            </video>
                            <div className="caption-slider">
                                <h3>Passion for MOBILitY drives us</h3>
                                <h2>Join Us</h2>
                                <p>Ihr Partner in strategischen Transformationsprozessen</p>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="bg-video-wrap">
                            <video loop muted autoPlay>
                                <source src="assets/video/815833343.mp4" type="video/mp4" />
                            </video>
                            <div className="caption-slider">
                                <h3>Passion for MOBILitY drives us</h3>
                                <h2>Client Services</h2>
                                <p>Ihr Partner in strategischen Transformationsprozessen</p>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="bg-video-wrap">
                            <video loop muted autoPlay>
                                <source src="assets/video/53902.mp4" type="video/mp4" />
                            </video>
                            <div className="caption-slider">
                                <h3>Passion for MOBILitY drives us</h3>
                                <h2>Join Us</h2>
                                <p>Ihr Partner in strategischen Transformationsprozessen</p>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="bg-video-wrap">
                            <video loop muted autoPlay>
                                <source src="assets/video/1168150781.mp4" type="video/mp4" />
                            </video>
                            <div className="caption-slider">
                                <h3>Passion for MOBILitY drives us</h3>
                                <h2>Client Services</h2>
                                <p>Ihr Partner in strategischen Transformationsprozessen</p>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Slider