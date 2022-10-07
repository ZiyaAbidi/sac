import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Auth from '../views/auth/Auth';
import Dashboard from '../views/auth/Dashboard';
import ForgetPassword from '../views/auth/ForgetPassword';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';
import About from '../views/pages/About';
import Careers from '../views/pages/Careers';
import Clients from '../views/pages/Clients';
import Contact from '../views/pages/Contact';
import Home from '../views/pages/Home'
import Insights from '../views/pages/Insights';
import Layout from '../views/pages/Layout';
import Services from '../views/pages/Services';
import ServicesProduct from '../views/auth/ServicesProduct';

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="clients" element={<Clients />} />
                <Route path="insights" element={<Insights />} />
                <Route path="careers" element={<Careers />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="forget-password" element={<ForgetPassword />} />
            </Route>

            <Route path="/" element={<Auth />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path='products' element={<ServicesProduct />} />
            </Route>
        </Routes>
    )
}

export default Index