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
                  <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" />
                  </div>

                  <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" />
                  </div>

                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>

                  <p class="forget">
                    <Link to='/forget-password'>Forget Password ? </Link>
                  </p>

                  <div class="mb-3">
                    <button type="submit" class="btn btn-primary">Login</button>
                  </div>

                  <p class="signup">
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