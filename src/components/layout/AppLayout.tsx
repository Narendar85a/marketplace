"use client";

import { Layout } from "antd";
import "./AppLayout.scss";
import Navbar from "./sider/Navbar";
import Topbar from "./header/Topbar";

const { Header, Sider, Content } = Layout;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className="h-screen w-full">
      <Header className="header">
       <Topbar/>
      </Header>

      <Layout>
        <Sider className="sider">
          <Navbar/>
        </Sider>

        <Content className="content">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
