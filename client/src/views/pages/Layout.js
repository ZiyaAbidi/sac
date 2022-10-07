import React from 'react'
import { Helmet } from "react-helmet";

import Header from '../../components/lib/Header';
import Footer from '../../components/lib/Footer';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SAC-Group</title>
                <link rel="stylesheet" href="assets/css/style.css" />
                <link rel="stylesheet" href="assets/stylesheet/circle-piechart.css" />
            </Helmet>

            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout