import { Link } from 'react-router-dom'
import { UsergroupAddOutlined, HomeOutlined, ProductOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useState } from 'react'
const Header = () => {
    const [current, setCurrent] = useState('');
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
    ];

    return (
        <Menu onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    )
}

export default Header