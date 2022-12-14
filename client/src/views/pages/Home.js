import React from 'react'
import ProductSlider from '../../components/templates/ProductSlider'
import Slider from '../../components/templates/Slider'

const Home = () => {
  return (
    <main className='home_pg'>
      <Slider />

      <section className="sustained-success">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="startup-textLeft text-center">
                <h3>SAC bedient eine Breite globale Klientenbasis mit nachhaltigem Erfolg</h3>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-md-4">
              <div className="sustained_box" style={{ backgroundImage: 'url(assets/img/sust1.png)' }}>
                <a href="#">
                  <img src="assets/img/sust1.png" alt="" className="img-fluid opcity-0" />
                  <div className="content-style">
                    <h3>Strategieberatung </h3>
                    <p>mit messbar nachhaltigem Mehrwert</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sustained_box" style={{ backgroundImage: 'url(assets/img/sust2.png)' }}>
                <a href="#">
                  <img src="assets/img/sust2.png" alt="" className="img-fluid opcity-0" />
                  <div className="content-style">
                    <p><span><i className="fa fa-angle-right"></i> </span><span className="counter">30</span> Klienten aus Auto-mobil- & angrenzenden
                      Industrien in</p>
                    <p><span><i className="fa fa-angle-right"></i> </span><span className="counter">15</span> Ländern auf</p>
                    <p><span className="counter">4</span> Kontinenten</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sustained_box" style={{ backgroundImage: 'url(assets/img/sust3.png)' }}>
                <img src="assets/img/sust3.png" alt="" className="img-fluid opcity-0" />
                <div className="content-style">
                  <h3><i className="fa fa-angle-right"></i> <span className="counter">5</span></h3>
                  <p>Zulieferer-Markteintritte in den Automotive-Markt begleitet</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sustained_box" style={{ backgroundImage: 'url(assets/img/sust4.png)' }}>
                <a href="#">
                  <img src="assets/img/sust4.png" alt="" className="img-fluid opcity-0" />
                  <div className="content-style">
                    <p>Begleitung, bis eine </p>
                    <h3>wirkungsvolle Implementierung </h3>
                    <p>sichergestellt ist</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sustained_box" style={{ backgroundImage: 'url(assets/img/sust5.png)' }}>
                <a href="#">
                  <img src="assets/img/sust5.png" alt="" className="img-fluid opcity-0" />
                  <div className="content-style">
                    <h3><i className="fa fa-angle-right"></i> <span className="counter">10</span></h3>
                    <p>Automobilmarken mitgestaltet und Markteintritte unterstützt</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sustained_box" style={{ backgroundImage: 'url(assets/img/sust6.png)' }}>
                <a href="#">
                  <img src="assets/img/sust6.png" alt="" className="img-fluid opcity-0" />
                  <div className="content-style">
                    <h3><i className="fa fa-angle-right"></i> <span className="counter">5</span></h3>
                    <p>Marken- und Strategie-Transformationen durchgeführt</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products-slider">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="startup-textLeft text-center color-white">
                <h3>Höchste Qualität und Kundenzufriedenheit ist unsere Philosophie</h3>
                <h4>Wir sind stolz und es spornt uns weiter an, dass wir zum wiederholten Male von unseren
                  Klienten zu den besten Beratern gewählt wurden – Danke. </h4>
              </div>
            </div>
          </div>

          <ProductSlider />
        </div>
      </section>

      <section className="transformation">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="startup-textLeft text-center">
                <h3>Wir unterstützen Inhaltliche & Strategische Transformationsprozesse </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card-details">
                <div className="media bg_I">
                  <div className="media-left">
                    <img src="assets/img/img1.png" alt="" className="media-object" />
                  </div>

                  <div className="media-body">
                    <ul>
                      <li>
                        <h3>Automobilindustrie wird Automotive 2.0</h3>
                        <p>Die Automobil- und Mobilitätsindustrie befindet sich im Umbruch. Der größte
                          Transformationsprozess seit der Erfindung des Fließbandes durch Henry Ford.
                        </p>
                      </li>
                      <li>
                        <h3>Ein neues Spiefeld mit einer neuen Ordnung</h3>
                        <p>Neue Antriebskonzepte werden entwickelt. Fahrzeuge werden digitalisiert und
                          eins mit ihrer Umwelt. Mobilität wird fluent. Neue Nutzungsfelder, Märkte
                          und Player entstehen.
                        </p>
                      </li>
                      <li>
                        <h3>Orientierung und ein klarer Kompass nötig</h3>
                        <p>Auf dem neuen Mobilitäts-Spiefeld sind wir ihr kompetente Partner. Wir helfen
                          Ihnen, Orientierung zu behalten und die Potentiale, die die neue Welt für
                          Sie bietet, zu heben.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="arrow">
                <img src="assets/img/big-arrow.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card-details">

                <div className="media bg_II">
                  <a href="#">
                    <div className="media-left">
                      <img src="assets/img/img2.png" alt="" className="media-object" />
                    </div>
                  </a>

                  <div className="media-body">
                    <ul>
                      <li>
                        <h3>Sie wollen als neuer Player auf das Spielfeld Automotive 2.0 treten?
                        </h3>
                        <p>Wenn Sie eine neue (Sub-)Brand oder ein neues Fahrzeugmodell schaffen,
                          führen
                          wir das Brand-/Modell-Shaping sowie die Zieldefinition für Ihr
                          Fahrzeugiprojekt durch.
                        </p>
                      </li>
                      <li>
                        <h3>Sie wollen an den Chancen der neuen Spielordnung partizipieren?</h3>
                        <p>Wir evaluieren Ihren aktuellen Markt, analysieren Ihre Wettbewerber und
                          erschließen für Sie neue Märkte und Wachstumspotenziale Ihrer
                          bestehenden
                          Produkte.
                        </p>
                      </li>
                      <li>
                        <h3>Sie wollen einen Partner mit Verständnis für die technische Seite?</h3>
                        <p>Wir verstehen nicht nur die Marktseite des neuen Spielfelds. Auch die
                          technische Seite von neuen Batterietechnologien über Recyclingverfahren
                          bis
                          hin zu Telekommunikationsstdards verstehen wir und begleiten Sie im
                          Heben
                          der damit verbundenen Potenziale.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home