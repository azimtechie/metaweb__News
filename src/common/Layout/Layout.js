import React from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from 'antd';
import Header from "../Header/Header"
import Sidebar from '../Sidebar/Sidebar'
import Footer from "../Footer/Footer"
import "./Layout.css"
const { Content } = Layout;

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <div className="sidebar-inner-section">
                <Layout hasSider className='Sidebar__meta' style={{ minHeight: '100vh' }}>
                    <Sidebar />
                    <Layout className="site-layout" >
                        <Content>
                            <Outlet />
                        </Content>
                        <Footer />

                    </Layout>
                </Layout>
            </div>
        </>
    );
};

export default DefaultLayout;