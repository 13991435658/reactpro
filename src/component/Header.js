import React, { useState } from 'react'
import { Button, Layout, theme } from 'antd';
import {MenuFoldOutlined,MenuUnfoldOutlined} from '@ant-design/icons';
const { Header } = Layout;
export default function Toheader() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed] = useState(true)
  return (
    <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() =>{}}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
  )
}
