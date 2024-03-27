import React from "react";
import { Layout, Menu } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

interface SideMenuProps {
    collapsed: boolean;
}

const { Sider } = Layout;

export const SideMenu: React.FC<SideMenuProps> = ({ collapsed }) => {

    return (
        <Sider trigger={null}
               collapsible
               collapsed={collapsed}
               className="overflow-auto h-[100vh]"
        >
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'nav 1',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                ]}
            />
        </Sider>
    )
}
