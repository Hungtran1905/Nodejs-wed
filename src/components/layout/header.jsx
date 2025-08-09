import { Link } from 'react-router-dom'
import { UsergroupAddOutlined, HomeOutlined, ProductOutlined, SettingOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context.jsx'
const Header = () => {
    const [current, setCurrent] = useState('');

    const { user } = useContext(AuthContext);
    console.log("user", user);
    const onClick = e => {
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />
        },
        {
            label: <Link to={"/product"}>Product</Link>,
            key: 'product',
            icon: <ProductOutlined />
        },
        {
            label: 'Settings',
            key: 'setting',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={"/login"}>Login</Link>,
                    key: 'login',
                },
                {
                    label: 'Logout',
                    key: 'logout',
                },
            ]
        }
    ];

    return (
        <Menu onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    )
}

export default Header