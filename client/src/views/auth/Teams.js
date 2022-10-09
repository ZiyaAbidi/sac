import React from 'react'
import { Link } from 'react-router-dom'
import Aside from '../../components/auth/lib/Aside'
import Banner from '../../components/auth/lib/Banner'
import ListTable from '../../components/auth/lib/ListTable'
import Pagination from '../../components/auth/lib/Pagination'

const Teams = () => {
  return (
    <main className="main">
      <div className="main-wapr">
        <Aside />

        <div className="rightSection">
          <Banner title="Teams" desc="We need some basic information about your company, the product or services that it provides, and where it operates." class="" />

          <div className="custom-padding">
            <div className="content_sec bg_white">
              <div className="add-btn">
                <Link to='../add-product'><img src="./img/rocket.png" alt="rocket" /> Create new
                  Team</Link>
              </div>

              <h3>23 Teams listed</h3>
            </div>


            <ListTable />


            <Pagination />
          </div>
        </div>
      </div>

    </main>
  )
}

export default Teams
