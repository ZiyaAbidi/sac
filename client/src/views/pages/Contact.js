import React from 'react'
import Banner from '../../components/lib/Banner'
import Map from '../../components/templates/Map'

const Contact = () => {
  return (
    <main className='contact_pg'>
      <Banner title='Contact us' desc='Wir haben Ihr Interesse geweckt? – Kontaktieren Sie uns!' banner='banner3.jpg'/>

      <section className="contact-section">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="media">
                <div className="media-left">
                  <img src="assets/img/address.png" alt="" className="media-object" />
                </div>

                <div className="media-body">
                  <p>Stahl Automotive Consulting GmbH & Co. KG <br />
                    Otto-Heilmann-Str. 5 D-82031 Grünwald</p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img src="assets/img/email.png" alt="" className="media-object" />
                </div>

                <div className="media-body">
                  <p><a href="mailto:info@sac-group.eu">info@sac-group.eu</a></p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img src="assets/img/phone.png" alt="" className="media-object" />
                </div>

                <div className="media-body">
                  <p><a href="tel:+49-(89)-3500 9966">+49-(89)-3500 9966</a></p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img src="assets/img/social.png" alt="" className="media-object" />
                </div>

                <div className="media-body">
                  <p><a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-arrow-right"></i>
                    LinkedIn</a></p>
                  <p><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-arrow-right"></i>
                    Facebook</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <Map />
      </section>
    </main>
  )
}

export default Contact