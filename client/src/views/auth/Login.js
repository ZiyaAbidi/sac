import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/lib/Banner'

const Login = () => {
  return (
    <main className='about_pg'>
      <Banner title="Login" desc="Als Branchenexperten inspirieren wir weltweit Führungskräfte" banner="banner1.jpg" />

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h3>Login here</h3>
              </div>
            </div>


            <div className="col-md-12">
              <div className="auth_form">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                  </div>

                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>

                  <p className="forget">
                    <Link to='/forget-password'>Forget Password ? </Link>
                  </p>

                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>

                  <p className="signup">
                    Don't have an account ? <Link to='/register'> Sign Up.</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login