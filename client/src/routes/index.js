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
import Products from '../views/auth/Products';
import Pages from '../views/auth/Pages';
import Teams from '../views/auth/Teams';
import Posts from '../views/auth/Posts';
import Profile from '../views/auth/Profile';
import AdminContact from '../views/auth/AdminContact';
import PrivacyPolicy from '../views/auth/PrivacyPolicy';
import AdminServices from '../views/auth/products/AdminServices';
import AdminClients from '../views/auth/products/AdminClients';
import AdminInsights from '../views/auth/products/AdminInsights';
import AddProduct from '../views/auth/products/AddProduct';
import AddPost from '../views/auth/AddPost';

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

            <Route path="/admin" element={<Auth />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='products' element={<Products />} />
                <Route path='add-product' element={<AddProduct />} />
                <Route path='add-post' element={<AddPost />} />
                <Route path='services' element={<AdminServices />} />
                <Route path='clients' element={<AdminClients />} />
                <Route path='insights' element={<AdminInsights />} />
                <Route path='pages' element={<Pages />} />
                <Route path='teams' element={<Teams />} />
                <Route path='posts' element={<Posts />} />
                <Route path='profile' element={<Profile />} />
                <Route path='contact' element={<AdminContact />} />
                <Route path='terms' element={<Teams />} />
                <Route path='privacy-policy' element={<PrivacyPolicy />} />
            </Route>
        </Routes>
    )
}

export default Index