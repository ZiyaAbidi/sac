import React from 'react'
import { Link } from 'react-router-dom'
import Aside from '../../components/auth/lib/Aside'
import Banner from '../../components/auth/lib/Banner'
import ListTable from '../../components/auth/lib/ListTable'

const Pages = () => {
  return (
    <main className="main">
      <div className="main-wapr">
        <Aside/>

        <div className="rightSection">
        <Banner title="Pages" desc="We need some basic information about your company, the product or services that it provides, and where it operates." class="" />

          <div className="custom-padding">
            <div className="content_sec bg_white">
              <h3>3 Pages listed</h3>
            </div>


           <ListTable />
          </div>
        </div>
      </div>

    </main>
  )
}

export default Pages
