import React from 'react'
import Banner from '../../components/lib/Banner'
import Circle from '../../components/templates/Circle'
import ClientsSlider from '../../components/templates/ClientsSlider'

const Services = () => {
  return (
    <main className='services_pg'>
      <Banner title="Services" desc="Fundierte Beratung im Bereich Automotive und darüberhinaus" banner="banner2.jpg" />

      <section className="about-section">
        <div className="container">

          <div className="row d-flex align-items-center custom_row">
            <div className="col-md-6">
              <div className="leftSec-content">
                <div className="box">
                  <h3>Versierter Partner bei Transformationsprozessen in der Mobilitätsindustrie</h3>
                </div>

                <div className="box">
                  <h3>Breites Spektum funktionaler Expertise entlang der automobilen Wertschöpfungskette</h3>
                </div>

                <div className="box">
                  <h3>Tiefgreifende Erfahrung im Management von State-of-the-art Technologien</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Circle />
            </div>
          </div>
        </div>
      </section>

      <div className="marketplace-section pb-50">
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="title-text">
                <h3>Kernkompetenzgebiete</h3>
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

export default Services