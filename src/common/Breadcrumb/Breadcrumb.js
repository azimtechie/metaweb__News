import { Alert, Breadcrumb } from 'antd';
import React from 'react';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import './Breadcrumb.css'
const BreadcrumbWithDefalut = () => (
    <ul className="app-list">
        <li>
            <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
        </li>
        <li>
            <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
        </li>
    </ul>
);
const breadcrumbNameMap = {
    '/apps': 'Application List',
    '/apps/1': 'Application1',
    '/apps/2': 'Application2',
    '/apps/1/detail': 'Detail',
    '/apps/2/detail': 'Detail',
};
const NavBreadcrumb = () => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return (
        <div className="demo">
            <div className="demo-nav">
                <Link to="/">Home</Link>
                <Link to="/apps">Application List</Link>
            </div>
            <Routes>
                <Route path="/apps" element={<BreadcrumbWithDefalut />} />
                <Route path="*" element={<span style={{fontSize:'20px', fontWeight:'bolder', padding:'10px'}}>Home Page</span>} />
            </Routes>
            <Alert
                style={{
                    margin: '16px 0',
                }}
                message="Turn notification on for letest updates!"
                closable={true}
            />
            <Breadcrumb>{breadcrumbItems}</Breadcrumb>
        </div>
    );
};
export default NavBreadcrumb;