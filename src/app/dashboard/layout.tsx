"use client"
import Logo from "@/components/Logo";
import MenuList from "@/components/MenuList";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import {Button, Layout, theme} from "antd";
import { useState } from "react";
import {MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons";

const { Header, Sider, Content} = Layout;

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const toggleTheme = ()=> {
    setDarkTheme(!darkTheme);
  }

  const {
    token : {colorBgContainer}
  } = theme.useToken()
  return (
    <>
      <Layout className="h-screen overflow-auto">
        <Sider 
          collapsed={collapsed} 
          collapsible
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'} 
          className="bg-white">
          <Logo/>
          <MenuList darkTheme={darkTheme}/>
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        </Sider>
        <Layout>
          <Header className={`sticky p-0 bg-[${colorBgContainer}]`}>
            <Button type="text" className="ml-4 text-white"  onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}/>
          </Header>
          <Layout>
            <Content>{children}</Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}