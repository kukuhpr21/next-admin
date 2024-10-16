"use client"
import Logo from '@/components/Logo';
import MenuList from '@/components/MenuList';
import { Button, Layout } from 'antd';
import React, { useState } from 'react';
import {MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className='flex flex-row lg:p-3 h-screen bg-slate-300'>
      <Sider
        className='flex flex-col h-full overflow-auto rounded-lg scrollbar-none shadow-lg'
        width={250}
        collapsed={collapsed} 
        collapsible
        trigger={null}
        theme='light'>
        <Logo/>
        <MenuList darkTheme={false}/>
      </Sider>
      <Layout className='flex flex-col lg:px-2 bg-slate-300'>
        <Header className='sticky p-0 bg-white lg:rounded-lg shadow-lg'>
          <Button type="text" className="ml-4 text-white"  onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined className='text-slate-800'/> : <MenuFoldOutlined className='text-slate-800'/>}/>
        </Header>
        <Content className='bg-transparent p-3 overflow-auto scrollbar-none'>{children}</Content>
        <Footer className='text-center bg-transparent'>
          Next Admin ©{new Date().getFullYear()} Created by Kukuh
        </Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;