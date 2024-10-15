"use client"
import React, { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import MenuList from '@/components/MenuList';
import Logo from '@/components/Logo';
import {MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const paddingMainLayout = collapsed ? 'pl-[80px]' : 'pl-[200px]';

  return (
    <Layout hasSider >
      <Sider 
        style={siderStyle}
        collapsed={collapsed} 
        collapsible
        trigger={null}>
        <Logo/>
        <MenuList darkTheme={true}/>
      </Sider>
      <Layout className={`bg-[${colorBgContainer}] ${paddingMainLayout}`}>
        <Header className={`fixed w-full top-0 z-50 p-0 h-[66px] bg-[${colorBgContainer}]`}>
        <Button type="text" className="ml-4 text-white"  onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}/>
        </Header>
        <Content className="mt-6 mr-4 mb-0 overflow-[initial] h-screen p-4">
          {children}
        </Content>
        <Footer className="text-center">
          Pobi Studio Design ©{new Date().getFullYear()} Created by Pobi Studio
        </Footer>
      </Layout>
    </Layout>
  )
}