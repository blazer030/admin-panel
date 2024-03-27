"use client"

import React, { useState } from "react";
import { Layout, theme } from "antd";
import { SideMenu } from "@/app/(Auth)/components/sideMenu";
import { Navbar } from "@/app/(Auth)/components/navbar";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const { Header, Sider, Content, Footer } = Layout;
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggleCollapsed = () => setCollapsed(!collapsed);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout hasSider>
            <SideMenu collapsed={collapsed} />

            <Layout className="h-screen">
                <Navbar collapsed={collapsed} onToggleCollapsed={onToggleCollapsed} />

                <Content style={{ margin: '24px 16px 0', overflow: 'auto'}}>
                    <div
                        style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Content>
            </Layout>
        </Layout>
    );
}

export default AuthLayout;
