import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Banner from '../../components/lib/Banner'

const Register = () => {
    const [register, setRegister] = useState({
        user: '',
        email: '',
        img: '',
        password: '',
        new_password: '',
        check: ''
    });

    const handleInput = (e) => {
        const { name, value } = e.target;

        setRegister({ ...register, [name]: value })
        // console.log('User- ', register);
    }

    const navigate = useNavigate()

    const addUser = (e) => {
        e.preventDefault();
        console.log('User- ', register);
        const { user, email, img, password, new_password, check } = register;

        if (user === '') {
            console.log('user field required..!');
        } else if (email === '') {
            console.log('email field required..!');
        } else if (!email.includes('@')) {
            console.log('email not valid..!');
        } else if (password === '') {
            console.log('password field required..!');
        } else if (password.length < 5) {
            console.log('password lenght 5 charector..!');
        } else if (new_password === '') {
            console.log('new_password field required..!');
        } else if (password != new_password) {
            console.log('password not match..!');
        } else if (check === '') {
            console.log('check field required..!');
        } else {
            console.log('Data submit...!!!!');

            setRegister({
                user: '',
                email: '',
                img: '',
                password: '',
                new_password: '',
                check: ''
            })

            navigate("/login");

        }


    }




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
                                <form encType="multipart/form-data">
                                    <div className="mb-3">
                                        <label htmlFor="user" className="form-label">User Name</label>
                                        <input type="text" name='user' onChange={handleInput} className="form-control" id="user" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="text" name='email' onChange={handleInput} className="form-control" id="email" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="img" className="form-label">Upload Image</label>
                                        <input type="file" name='img' onChange={handleInput} className="form-control" id="img" accept='.png, .jpg, .jpeg' />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" name='password' onChange={handleInput} className="form-control" id="password" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="new_password" className="form-label">Confirm Password</label>
                                        <input type="password" name='new_password' onChange={handleInput} className="form-control" id="new_password" />
                                    </div>

                                    <div className="mb-3 form-check">
                                        <input type="checkbox" name='check' onChange={handleInput} className="form-check-input" id="check" />
                                        <label className="form-check-label" htmlFor="check">Check me out</label>
                                    </div>

                                    <div className="mb-3">
                                        <button type="submit" onClick={addUser} className="btn btn-primary">Register</button>
                                    </div>

                                    <p className="signup">
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