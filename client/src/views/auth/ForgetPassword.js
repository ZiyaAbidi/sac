import React from 'react'
import Banner from '../../components/lib/Banner'

const ForgetPassword = () => {
    return (
        <main className='about_pg'>
            <Banner title="Forget Password" desc="Als Branchenexperten inspirieren wir weltweit Führungskräfte" banner="banner3.jpg" />

            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h3>Forget Password</h3>
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
                                        <button type="submit" class="btn btn-primary">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ForgetPassword