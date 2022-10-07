import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
    loop: true,
    rewind: true,
    autoplay: false,
    margin: 0,
    nav: false,
    dots: false,
    smartSpeed: 600,
    items: 1
};

const ClientSlider = () => {
    return (
        <OwlCarousel className="client_carousel2" id="client_carousel2" {...options}>
            <div className="clinet-feedback">
                <img src="assets/img/coma.png" alt="" className="img-fluid" />
                <p>Die einzige Daseinsberechtigung von SAC ist die hohe Qualität, um Klienten durch jede
                    Aktion
                    einen dauerhaften und substanziellen Mehrwert zu stiften </p>
                <h5>Dr. Martin Stahl, SAC Gründer</h5>
            </div>

            <div className="clinet-feedback">
                <img src="assets/img/coma.png" alt="" className="img-fluid" />
                <p>Die einzige Daseinsberechtigung von SAC ist die hohe Qualität, um Klienten durch jede
                    Aktion
                    einen dauerhaften und substanziellen Mehrwert zu stiften </p>
                <h5>Dr. Martin Stahl, SAC Gründer</h5>
            </div>

            <div className="clinet-feedback">
                <img src="assets/img/coma.png" alt="" className="img-fluid" />
                <p>Die einzige Daseinsberechtigung von SAC ist die hohe Qualität, um Klienten durch jede
                    Aktion
                    einen dauerhaften und substanziellen Mehrwert zu stiften </p>
                <h5>Dr. Martin Stahl, SAC Gründer</h5>
            </div>
        </OwlCarousel>
    )
}

export default ClientSlider