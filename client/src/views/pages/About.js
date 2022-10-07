import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import Banner from '../../components/lib/Banner'
import ClientSlider from '../../components/templates/ClientSlider'
import TeamSlider from '../../components/templates/TeamSlider';

const options = {
  loop: false,
  rewind: true,
  autoplay: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    },
    1199: {
      items: 5
    }
  }
};

const About = () => {
  return (
    <main className='about_pg'>
      <Banner title="About us" desc="Als Branchenexperten inspirieren wir weltweit Führungskräfte" banner="banner1.jpg" />

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Warum ist SAC Ihr Partner für den strategischen Transformationsprozess?</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="boxSec">
                <div className="img-section">
                  <a href="#">
                    <img src="assets/img/about1.png" alt="" className="img-fluid" />
                    <h4>Ausgeprägter Sachverstand & tiefe Expertise</h4>
                  </a>
                </div>

                <div className="content-section">
                  <p>In der Begleitung von inhaltlich getrie-benen Transformationsprozessen in der
                    Automobilindustrie hat SAC eine sehr tiefe Expertise – Bei OEMs, Zulieferern und vielen
                    angrenzenden Branchen</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="boxSec">
                <div className="img-section">
                  <a href="#">
                    <img src="assets/img/about2.png" alt="" className="img-fluid" />
                    <h4>Langfristige & vertrauens-volle Partner-schaften</h4>
                  </a>
                </div>

                <div className="content-section">
                  <p>Zusammen mit dem Management seiner Klienten schafft SAC dauerhafte und substanzielle
                    Verbesserungen –Vertrauensvoll, partnerschaftlich und verlässlich</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="boxSec">
                <div className="img-section">
                  <a href="#">
                    <img src="assets/img/about3.png" alt="" className="img-fluid" />
                    <h4>Hohe Qualitäts-standards & professio-nelle Werte</h4>
                  </a>
                </div>

                <div className="content-section">
                  <p>Einem strengen Kodex professioneller Werte und Qualitätstandards folgend kombiniert SAC
                    analytische Sorgfalt mit gesundem Pragmatismus – Gleichzeitige Lieferung von
                    analytischer Genauigkeit und Umsetzbarkeit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonail-about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ClientSlider />
            </div>
          </div>
        </div>
      </section>

      <section className="marketplace-section mb-50">
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="title-text">
                <h3>Erfahrung und Fachwissen</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Erfahrung und Fachwissen Treffen auf Leidenschaft für Automobil und Mobilität</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel1" id="client_carousel">
                <div className="card-details">
                  <div className="media">
                    <div className="media-left">
                      <img src="assets/img/p1.png" alt="" className="media-object" />
                    </div>

                    <div className="media-body">
                      <div className="client_say">
                        <h3>Dr. Martin Stahl & das „Why“ von SAC </h3>
                        <img src="assets/img/coma.png" alt="" className="img-fluid start-coma" />
                        <p>Durch meine lange BMW-Historie als promovierter Automobilingenieur
                          vereine
                          ich tiefgehende und breite Automobilexertise mit ebenso breiter
                          Wirtschafts-
                          und Beratungsexpertise durch meine langjährige McKinsey-Vergangenheit.
                        </p>
                        <p>Als McKinsey-Berater habe ich SAC 2013 gegründet mit dem Anspruch,
                          unseren
                          Klienten in tatsächlich jeder Aktion einen substanziellen und
                          langfristigen
                          Mehrwert durch maximal hohe Qualität zu stiften. SAC sollte mehr sein
                          als
                          “noch eine Beratung”.</p>
                        <p>Ich bin dankbar, dass ich es in den letzten 9 Jahren geschafft habe,
                          durch
                          meine automobile Leidenschaft und die hohe SAC-Qualität kontinuierlich
                          neue
                          namhafte Klienten zu gewinnen, SAC auf dem Beratungsmarkt zu etablieren
                          und
                          den Transformationsprozess der Automobil- und Mobilitätsindustrie mit zu
                          gestalten.</p>
                        <img src="assets/img/coma.png" alt="" className="img-fluid end-coma" />

                        <h5><small>Dr. Martin Stahl, SAC Gründer </small></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="die-saulem">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="h-toop">
                  <h3>Die 5 Säulen unseres Erfolgs</h3>
                </div>

                <div className="border-20"></div>

                <OwlCarousel className="boxinline-saulen" {...options}>
                  <div className="erfolgs">
                    <div className="img-style">
                      <img src="assets/img/1.png" alt="" className="img-fluid" />
                    </div>
                    <h3>State-of-the-art Beratungs-methodik</h3>
                  </div>

                  <div className="erfolgs">
                    <div className="img-style">
                      <img src="assets/img/2.png" alt="" className="img-fluid" />
                    </div>
                    <h3>Umfassende Automobil-expertise</h3>
                  </div>

                  <div className="erfolgs">
                    <div className="img-style">
                      <img src="assets/img/3.png" alt="" className="img-fluid" />
                    </div>
                    <h3>Kompetentes und erfahrenes globales Experten-netzwerk</h3>
                  </div>

                  <div className="erfolgs">
                    <div className="img-style">
                      <img src="assets/img/4.png" alt="" className="img-fluid" />
                    </div>
                    <h3>Ein starkes Team – für die Extrameile beim Klienten</h3>
                  </div>

                  <div className="erfolgs">
                    <div className="img-style">
                      <img src="assets/img/5.png" alt="" className="img-fluid" />
                    </div>
                    <h3>Ein Think-Tank mit dem Motto „Staying ahead of the problem“</h3>
                  </div>
                </OwlCarousel>

                <div className="border-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marketplace-section">
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="title-text">
                <h3>SAC-Team</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <TeamSlider />
        </div>
      </section>
    </main>
  )
}

export default About