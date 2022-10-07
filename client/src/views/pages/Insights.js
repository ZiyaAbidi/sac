import React from 'react'
import Banner from '../../components/lib/Banner'

const Insights = () => {
  return (
    <main className='insights_pg'>
      <Banner title='Insights' desc='Vorausschauen und Vorausdenken: Den gesellschaftlichen Diskurs bereichern – SAC Whitepapers' banner='banner1.jpg'/>

      <section className="insights">
        <div className="container">
          <div className="nav nav-tabs row d-flex flex-warp justify-content-center" id="nav-tab" role="tablist">
            <div className="col-md-4" data-toggle="tab" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
              <div className="insights_box">
                <a href="#tabs">
                  <h3>Der Weg hin zu einer CO2-armen Mobilität</h3>
                  <div className="img-style">
                    <img src="assets/img/insights1.png" alt="" className="img-fluid" />
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4" id="menu1-tab" data-bs-toggle="tab" data-bs-target="#menu1" type="button" role="tab" aria-controls="menu1" aria-selected="false">
              <div className="insights_box">
                <a href="#tabs">
                  <h3>Der Wertschöpfungsbeitrag der EDL-Branche in der global trans-formierten
                    Automobilindustrie</h3>
                  <div className="img-style">
                    <img src="assets/img/insights2.png" alt="" className="img-fluid" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="marketplace-section pb-50 insights_pg" id="tabs">
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="title-text">
                <h3>Insights Details</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  <h3>Der Weg hin zu einer CO2-armen Mobilität – Neue Perspektiven zur Verkehrs- und
                    Energiewende
                    in Deutschland</h3>
                </div>
              </div>
            </div>

            <div className="row d-flex flex-warp justify-content-center">
              <div className="col-md-4">
                <div className="insights_box">
                  <div className="img-style">
                    <img src="assets/img/insights1.png" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="insights_box">
                  <h2>Überblick über die Studie</h2>

                  <div className="media-sec">
                    <h2>Kernfragen</h2>

                    <ul>
                      <li>Wie wirkt sich der <strong>Wandel zur E-Mobilität</strong> auf die
                        <strong>CO2-Emis-sionen</strong> und <strong>gesellschaftlichen Kosten</strong>
                        in
                        Deutschland aus?
                      </li>
                      <li>Welche <strong>Alternativen</strong> gibt es, um <strong>CO2-Emissionen</strong>
                        im
                        <strong>Mobilitätssektor</strong> zu <strong>reduzieren</strong>?
                      </li>
                    </ul>
                  </div>

                  <div className="media-sec">
                    <h2>Insights</h2>

                    <ul>
                      <li><strong>E-Fahrzeuge</strong> sind eine <strong>sehr teure Maßnahme</strong> zur
                        <strong>Reduktion</strong> von <strong>CO2-Emissionen</strong>
                      </li>
                      <li><strong>Entscheidung</strong> über den <strong>Klima-optimalen
                        Antriebsstrang</strong> sollte dem <strong>Markt überlassen</strong> werden
                      </li>
                    </ul>
                  </div>

                  <div className="media-sec">
                    <h2>Referenzen</h2>

                    <ul className="client_img">
                      <li><img src="assets/img/client-logo-1.png" alt="" className="img-fluid" /></li>
                      <li><img src="assets/img/client-logo-2.png" alt="" className="img-fluid" /></li>
                      <li><img src="assets/img/client-logo-3.png" alt="" className="img-fluid" /></li>
                      <li><img src="assets/img/client-logo-4.png" alt="" className="img-fluid" /></li>
                      <li><img src="assets/img/client-logo-5.png" alt="" className="img-fluid" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="menu1" role="tabpanel" aria-labelledby="menu1-tab">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  <h3>Der Wertschöpfungsbeitrag der EDL-Branche in der global trans-formierten
                    Automobilindustrie</h3>
                </div>
              </div>
            </div>

            <div className="row d-flex flex-warp justify-content-center">
              <div className="col-md-4">
                <div className="insights_box">
                  <div className="img-style">
                    <img src="assets/img/insights2.png" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="insights_box">
                  <h2>Überblick über die Studie</h2>

                  <div className="media-sec">
                    <h2>Kernfragen</h2>

                    <ul>
                      <li>Wie wirkt sich der <strong>Wandel zur E-Mobilität</strong> auf die
                        <strong>CO2-Emis-sionen</strong> und <strong>gesellschaftlichen Kosten</strong>
                        in
                        Deutschland aus?
                      </li>
                      <li>Welche <strong>Alternativen</strong> gibt es, um <strong>CO2-Emissionen</strong>
                        im
                        <strong>Mobilitätssektor</strong> zu <strong>reduzieren</strong>?
                      </li>
                    </ul>
                  </div>

                  <div className="media-sec">
                    <h2>Insights</h2>

                    <ul>
                      <li><strong>E-Fahrzeuge</strong> sind eine <strong>sehr teure Maßnahme</strong> zur
                        <strong>Reduktion</strong> von <strong>CO2-Emissionen</strong>
                      </li>
                      <li><strong>Entscheidung</strong> über den <strong>Klima-optimalen
                        Antriebsstrang</strong> sollte dem <strong>Markt überlassen</strong> werden
                      </li>
                    </ul>
                  </div>

                  <div className="media-sec">
                    <h2>Referenzen</h2>

                    <ul className="client_img">
                      <li><img src="assets/img/client-logo-1.png" alt="" className="img-fluid" /></li>
                      <li><img src="assets/img/client-logo-2.png" alt="" className="img-fluid" /></li>
                      <li><img src="assets/img/client-logo-3.png" alt="" className="img-fluid" /></li>
                      <li><img src="assets/img/client-logo-4.png" alt="" className="img-fluid" /></li>
                      <li><img src="assets/img/client-logo-5.png" alt="" className="img-fluid" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Insights