import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/lib/Banner'

const Register = () => {
    return (
        <main className='about_pg'>
            <Banner title="Register" desc="Als Branchenexperten inspirieren wir weltweit Führungskräfte" banner="banner2.jpg" />

            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h3>New User Register here</h3>
                            </div>
                        </div>


                        <div className="col-md-12">
                            <div className="auth_form">
                                <form>
                                    <div class="mb-3">
                                        <label for="user" class="form-label">User Name</label>
                                        <input type="text" class="form-control" id="user" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email address</label>
                                        <input type="text" class="form-control" id="email" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="confirm_password" class="form-label">Confirm Password</label>
                                        <input type="password" class="form-control" id="confirm_password" />
                                    </div>

                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>

                                    <div class="mb-3">
                                        <button type="submit" class="btn btn-primary">Register</button>
                                    </div>

                                    <p class="signup">
                                    Already have an account ? <Link to='/login'> Sign In.</Link>
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

export default Register