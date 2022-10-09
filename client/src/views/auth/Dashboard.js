import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/auth/lib/Banner'

const Dashboard = () => {
  return (
    <main className="main">
      <div className="main-wapr">

        <div className="rightSection">

          <Banner title="Dashboard" desc="We need some basic information about your company, the product or services that it provides, and where it operates." class="pl-375px" />

          <div className="custom-padding pl-375px">
            <div className="row">
              <div className="col-lg-6">
                <div className="content_sec bg_white dashboard_sec">
                  <h4>You currently have</h4>

                  <div className="boxes">
                    <div className="box">
                      <Link to="../services">
                        <div className="number counter">13</div>
                        <p>All <br /> Services</p>
                      </Link>
                    </div>
                    <div className="box">
                      <Link to="../clients">
                        <div className="number counter">2</div>
                        <p>All <br /> Clients</p>
                      </Link>
                    </div>
                    <div className="box">
                      <Link to="../insights">
                        <div className="number counter">5</div>
                        <p>Total <br /> Insights</p>
                      </Link>
                    </div>
                  </div>

                  <div className="add-btn">
                    <Link to="../add-product" ><img src="./img/rocket.png" alt="rocket" /> Create
                      new
                      Product</Link>
                  </div>

                  <div className="boxes">
                    <div className="box">
                      <div className="number counter">0</div>
                      <p>All <br /> Clients</p>
                    </div>
                    <div className="box">
                      <div className="number counter">4</div>
                      <p>Clients <br /> Ready</p>
                    </div>
                    <div className="box">
                      <div className="number counter">8</div>
                      <p>Live <br /> Clients</p>
                    </div>
                  </div>

                  <div className="add-btn">
                    <Link to='../add-post'><img src="./img/rocket.png" alt="rocket" /> Create
                      Post</Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="content_sec bg_white">
                  <h4>Things to know</h4>

                  <ul className="ul_list mb-95">
                    <li>In order to publish your campaign you need to submit your KYB</li>
                    <li>Your gross revenu since 02/05/22 is 5748 $ for 1287 buyers</li>
                    <li>You have collected 21478 leads</li>
                  </ul>

                  <h4>What’s up with Yootribe ?</h4>

                  <p><strong><Link to='/admin/dashboard'><img src="./img/spotify.png" alt="spotify"
                    className="img-fluid" /></Link>
                    and Yootribe partnership to create NFT !</strong></p>
                  <img src="./img/img4.png" alt="" className="img-fluid mb-35" />
                  <p>Content of a page when looking at its layout. The point of using Loremp <br />
                    Many desktopublishing packages and web page editors now use Loremp <br />
                    Ipsum as their default model text, and a search for 'lorem ipsum.</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>


      <div className="img-bottom-right">
        <img src="./img/bottom-right.png" alt="" className="img-fluid" />
      </div>

    </main>
  )
}

export default Dashboard