import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
    loop: true,
    rewind: true,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    margin: 10,
    center: true,
    nav: true,
    dots: false,
    smartSpeed: 600,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 3
        }
    }
};

const ClientsSlider = () => {
    return (
        <OwlCarousel className="row_custom" id="row_custom" {...options}>
            <div className="col-custom-1">
                <div className="service_flip">
                    <div className="service-inner">
                        <div className="service-front">
                            <img alt="" className="img-responsive" src="assets/img/client-img1.png" />
                            <h2>Tier-X-Zulieferer</h2>
                        </div>

                        <div className="service-back">
                            <div className="content-sec">
                                <h3>Tier-X-Zulieferer</h3>
                                <p>Der Wandel der automobilen Welt hat für die Zulieferindustrie eine noch größere
                                    Bedeutung als für die OEMs selber. Der Bedarf an effektiven Softwarelösungen
                                    nimmt massiv zu.
                                    SAC unterstützt Zulieferer in ihrer strategischen (Neu-)Ausrichtung und im
                                    Erkennen niedergehender Märkte sowie neuer Opportunitäten.</p>

                                <div className="line"></div>

                                <h3>Projektbeispiel</h3>
                                <ul>
                                    <li>Klient: VDA</li>
                                    <li>Studie zur Zukunft der EDL</li>
                                    <li>Evaluation der Frage, ob Verlagerung von Deutschland/Europa nach Asien
                                        (weiter) stattfinden wird</li>
                                    <li>Extensive Befragung der europäischen Zulieferindustrie</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-custom-1">
                <div className="service_flip">
                    <div className="service-inner">
                        <div className="service-front">
                            <img alt="" className="img-responsive" src="assets/img/client-img2.png" />
                            <h2>OEMs</h2>
                        </div>

                        <div className="service-back">
                            <div className="content-sec">
                                <h3>OEMs</h3>
                                <p>OEMs transformieren sich gerade so stark wie nie zuvor. Vom Wandel zur
                                    E-Mobilität, bis hin zur Digitalisierung von Fahrzeug und Prododuktion - es gilt
                                    nicht nur bestehende Wettbewerbsvorteile zu erhalten sondern auch neue zu
                                    etablieren.
                                    SAC begleitet OEMs darin, Kernthemen zu identifizieren, Resilienz zu stärken und
                                    neue Potenziale durch Transformation zu heben. </p>


                                <div className="line"></div>

                                <h3>Projektbeispiel</h3>
                                <ul>
                                    <li>Klient: Europäischer Nutzfahrzeughersteller </li>
                                    <li>Strategieentwicklung für den Wandel von einem reinen Fahrzeug-Hersteller zum
                                        Anbieter holistischer Turn-Key solutions für Städte</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-custom-1">
                <div className="service_flip">
                    <div className="service-inner">
                        <div className="service-front">
                            <img alt="" className="img-responsive" src="assets/img/client-img3.png" />
                            <h2>Mobility Services </h2>
                        </div>

                        <div className="service-back">
                            <div className="content-sec">
                                <h3>Mobility Services </h3>
                                <p>Nicht nur der Automobil-, sondern der Mobilitätssektor als Ganzes ist im Begriff
                                    des starken Wandels. Autonome Taxen sind nur ein Stichwort. Die Euphorie
                                    westlicher Konzerne an Mobilitätsdienstleistungen hat nachgelassen, doch ist das
                                    Thema als Ganzes nicht weniger brennend.
                                    SAC misst Marktpotentiale und gibt klare Handlungsempfehlungen des ob und des
                                    Wie's des Markteintritts </p>


                                <div className="line"></div>

                                <h3>Projektbeispiel</h3>
                                <ul>
                                    <li>Klient: Asiatischer Großkonzern</li>
                                    <li>Quantitatives Assessment des Mobility-Services Marktes in China</li>
                                    <li>Ableitung strategische Handlungsempfehlung zum Eintritt/Nicht-Eintritt in
                                        den Markt</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-custom-1">
                <div className="service_flip">
                    <div className="service-inner">
                        <div className="service-front">
                            <img alt="" className="img-responsive" src="assets/img/ser1.png" />
                            <h2>Ladeinfrastruktur </h2>
                        </div>

                        <div className="service-back">
                            <div className="content-sec">
                                <h3>Ladeinfrastruktur </h3>
                                <p>Das engste Bottleneck für den flächendeckenden Ausbau der E-Mobilität ist der
                                    Ausbau der Ladeinfrastruktur. SAC unterstützt an verschiedenen Stellen entlang
                                    der Wertschöpfungskette: Vom OEM, das ein proprietäres Netz an Ladesäulen
                                    aufbaut, über den Versicherungskonzern, der ein Versicherungsangebot für private
                                    Ladestationen entwickelt, bis zum Energiekonzern, der das Back-bone eines
                                    Ladenetzes plant. </p>


                                <div className="line"></div>

                                <h3>Projektbeispiel</h3>
                                <ul>
                                    <li>Klient: US-Energieunternehmen</li>
                                    <li>Evaluation Markteintritt in das EV-Charging-Geschäft</li>
                                    <li>Entwicklung Markteintrittsstrategie im Spannungsfeld der allgemeinden
                                        strategischen Ziele des Klienten, regulatorische Vorgaben sowie Ladekunden
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default ClientsSlider