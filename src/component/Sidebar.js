import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu} from 'antd';

export default function Sidebar() {
  const navigate = useNavigate()
  const [collapsed] = useState(false)
  const { Sider } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '/login', <MenuFoldOutlined />),
  getItem('Option 3', 'a', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <PieChartOutlined />,[
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
  const go = (e)=>{
    navigate(e.key)
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        items={items}
        onClick={(e)=>go(e)}
      />
    </Sider>
  )
}
