import { Button, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { signOut } from "next-auth/react";

export function NavBar() {
    return (
        <Menu mode="horizontal" theme="dark" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Menu.Item key="logout" style={{ float: 'right' }}>
                <Button onClick={() => signOut()} icon={<LogoutOutlined />}>Logout</Button>
            </Menu.Item>
        </Menu>
    );
}