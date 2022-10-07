import React from 'react'
import Aside from '../../components/auth/lib/Aside'
import Banner from '../../components/auth/lib/Banner'
import Pagination from '../../components/auth/lib/Pagination'

const ServicesProduct = () => {
  return (
    <main className="main">
      <div className="main-wapr">
        <Aside class="active"/>

        <div className="rightSection">
        <Banner title="Services" desc="We need some basic information about your company, the product or services that it provides, and where it operates." class="" />

          <div className="custom-padding">
            <div className="content_sec bg_white">
              <div className="add-btn">
                <a href="create-campaign.html"><img src="./img/rocket.png" alt="rocket" /> Create new
                  Service</a>
              </div>

              <h3>3 Service listed</h3>
            </div>


            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>logo</th>
                    <th>Banner</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Days</th>
                    <th>NFT</th>
                    <th>Price</th>
                    <th>Copies</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="logo"><img src="./img/img1.png" alt="logo" className="img-fluid" /></td>
                    <td className="banner"><img src="./img/banner1.png" alt="banner" className="img-fluid" />
                    </td>
                    <td className="w200p f-16">Summer festival 2022 for the best of us</td>
                    <td className="f-16">Draft</td>
                    <td>30</td>
                    <td className="no_wrap f-16">Lets go to Dubai !</td>
                    <td className="w110p">250$ 0.15 ETH</td>
                    <td>150</td>
                    <td className="no_wrap">
                      <a href="#"><img src="./img/edit.png" alt="edit" /> <span>Edit</span></a>
                      <a href="#"><img src="./img/delete.png" alt="delete" />
                        <span>Trash</span></a>
                      <a href="#"><img src="./img/send.png" alt="live" /> <strong><span>Go
                        Live!</span></strong></a>
                    </td>
                  </tr>

                  <tr>
                    <td className="logo"><img src="./img/img1.png" alt="logo" className="img-fluid" /></td>
                    <td className="banner"><img src="./img/banner1.png" alt="banner" className="img-fluid" />
                    </td>
                    <td className="w200p f-16">Summer festival 2022 for the best of us</td>
                    <td className="f-16">Draft</td>
                    <td>30</td>
                    <td className="no_wrap f-16">Lets go to Dubai !</td>
                    <td className="w110p">250$ 0.15 ETH</td>
                    <td>150</td>
                    <td className="no_wrap">
                      <a href="#"><img src="./img/edit.png" alt="edit" /> <span>Edit</span></a>
                      <a href="#"><img src="./img/delete.png" alt="delete" />
                        <span>Trash</span></a>
                      <a href="#"><img src="./img/send.png" alt="live" /> <strong><span>Go
                        Live!</span></strong></a>
                    </td>
                  </tr>

                  <tr>
                    <td className="logo"><img src="./img/img1.png" alt="logo" className="img-fluid" /></td>
                    <td className="banner"><img src="./img/banner1.png" alt="banner" className="img-fluid" />
                    </td>
                    <td className="w200p f-16">Summer festival 2022 for the best of us</td>
                    <td className="f-16">Draft</td>
                    <td>30</td>
                    <td className="no_wrap f-16">Lets go to Dubai !</td>
                    <td className="w110p">250$ 0.15 ETH</td>
                    <td>150</td>
                    <td className="no_wrap">
                      <a href="#"><img src="./img/edit.png" alt="edit" /> <span>Edit</span></a>
                      <a href="#"><img src="./img/delete.png" alt="delete" />
                        <span>Trash</span></a>
                      <a href="#"><img src="./img/send.png" alt="live" /> <strong><span>Go
                        Live!</span></strong></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


            <Pagination />
          </div>
        </div>
      </div>

    </main>
  )
}

export default ServicesProduct