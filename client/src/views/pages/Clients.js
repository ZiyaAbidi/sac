import React from 'react'
import Banner from '../../components/lib/Banner'
import ClientsSlider from '../../components/templates/ClientsSlider'

const Clients = () => {
  return (
    <main className='clients_pg'>
      <Banner title="Clients" desc="Klienten aus der Automobilindustrie und angrenzenden Branchen sind mit SAC gut beraten" banner="banner3.jpg" />

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Die Transformation der Automobilindustrie erzeugt neue Vernetzungen. Wir ge-ben unseren
                  Klienten den Kompass an die Hand, um von diesen zu profitieren.</h3>
              </div>
            </div>
          </div>

          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-6 custom_md_6">
              {/* <div className="rightSec-img">
                        <img src="assets/img/circle2.png" alt="" className="img-fluid"/>
                    </div>  */}

              <div className="rightSec-circle">
                <div className="client_circle">
                  <div className="img1 circle_img">
                    <a href="javascript:;" data-toggle="modal" data-target="#popSelection">
                      <img src="assets/img/Automobileindustrie.jpg" alt="" className="img-fluid" />
                      <p>Automobileindustrie</p>
                    </a>
                  </div>
                  <div className="img2 circle_img">
                    <a href="javascript:;" data-toggle="modal" data-target="#popSelection">
                      <img src="assets/img/Telekommunikation.jpg" alt="" className="img-fluid" />
                      <p>Telekommunikation</p>
                    </a>
                  </div>
                  <div className="img3 circle_img">
                    <a href="javascript:;" data-toggle="modal" data-target="#popSelection">
                      <img src="assets/img/Energiesektor.jpg" alt="" className="img-fluid" />
                      <p>Energiesektor</p>
                    </a>
                  </div>
                  <div className="img4 circle_img">
                    <a href="javascript:;" data-toggle="modal" data-target="#popSelection">
                      <img src="assets/img/Mobility-Services.jpg" alt="" className="img-fluid" />
                      <p>Mobility Services</p>
                    </a>
                  </div>
                  <div className="img5 circle_img">
                    <a href="javascript:;" data-toggle="modal" data-target="#popSelection">
                      <img src="assets/img/Finanzsektor.jpg" alt="" className="img-fluid" />
                      <p>Finanzsektor</p>
                    </a>
                  </div>
                  <div className="img6 circle_img">
                    <a href="javascript:;" data-toggle="modal" data-target="#popSelection">
                      <img src="assets/img/IT-Hightech.jpg" alt="" className="img-fluid" />
                      <p>IT & Hightech</p>
                    </a>
                  </div>
                  <div className="img7 circle_img">
                    <a href="javascript:;" data-toggle="modal" data-target="#popSelection">
                      <img src="assets/img/Maschinenbau.jpg" alt="" className="img-fluid" />
                      <p>Maschinenbau</p>
                    </a>
                  </div>
                  <div className="main_img">
                    <a href="javascript:;" data-toggle="modal" data-target="#popSelection">
                      <img src="assets/img/Automobileindustrie2.jpg" alt="" className="img-fluid" />
                      <p>Automobileindustrie2.0</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marketplace-section pb-50">
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="title-text">
                <h3>Klientenbranchen</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <ClientsSlider />
        </div>
      </div>
    </main>
  )
}

export default Clients