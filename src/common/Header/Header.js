import React from 'react';
import "./Header.css"
import { Input, Space, Button, Dropdown, Menu, Select } from 'antd';


const { Option } = Select;
const Header = () => {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    return (
        <div >
            <div className="nav__menu fixed-top">
                <ul>
                    <li className='logo__header '>MetaWeb News</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>
                        <Select
                            defaultValue="english"
                            style={{
                                width: 120,
                            }}
                        >
                            <Option value="english">English</Option>
                            <Option value="hindi">Hindi</Option>
                        </Select>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Search className='Metaweb__search' placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
                    </li>
                    <li>Profile</li>
                    <li>Sign Out</li>
                </ul>
            </div>
            <div></div>
        </div>
    );
};

export default Header;