import React from 'react'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Routerindex from '../Routerindex'
import './box.css'
import { Layout, theme } from 'antd';
const { Content } = Layout;
export default function Box() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header/>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Routerindex/>
        </Content>
      </Layout>
    </Layout>
  )
}
