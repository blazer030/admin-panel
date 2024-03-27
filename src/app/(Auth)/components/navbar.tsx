import React from "react";
import { Button, Layout, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

interface NavbarProps {
    collapsed: boolean;
    onToggleCollapsed: () => void;
}

const { Header } = Layout;

export const Navbar: React.FC<NavbarProps> = ({ collapsed, onToggleCollapsed }) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={onToggleCollapsed}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
        </Header>
    )
}
