import React from 'react'
import { Helmet } from "react-helmet";

import { Outlet } from 'react-router-dom'
import Footer from '../../components/auth/Footer'
import Header from '../../components/auth/Header'

const Auth = () => {
    return (
        <>
            <Helmet>
                <title>Admin</title>
                <link rel="stylesheet" href="css/style.css" />
            </Helmet>

            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Auth