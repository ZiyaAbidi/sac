import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
    loop: false,
    rewind: true,
    autoplay: false,
    margin: 30,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6,
            touchDrag: false,
            mouseDrag: false
        }
    }
};

const ProductSlider = () => {
    return (
        <OwlCarousel className="testimonial-artical" id="testimonial-artical" {...options}>
            <div className="item">
                <div className="productSex">
                    <img src="assets/img/porduct1.png" alt="product" className="img-fluid" />
                </div>
            </div>

            <div className="item">
                <div className="productSex">
                    <img src="assets/img/porduct2.png" alt="product" className="img-fluid" />
                </div>
            </div>

            <div className="item">
                <div className="productSex">
                    <img src="assets/img/porduct3.png" alt="product" className="img-fluid" />
                </div>
            </div>

            <div className="item">
                <div className="productSex">
                    <img src="assets/img/porduct4.png" alt="product" className="img-fluid" />
                </div>
            </div>

            <div className="item">
                <div className="productSex">
                    <img src="assets/img/porduct5.png" alt="product" className="img-fluid" />
                </div>
            </div>

            <div className="item">
                <div className="productSex">
                    <img src="assets/img/porduct6.png" alt="product" className="img-fluid" />
                </div>
            </div>
        </OwlCarousel>
    )
}

export default ProductSlider