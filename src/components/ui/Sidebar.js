import React from 'react'
import { Layout, Menu } from 'antd'
import SidebarLink from './SidebarLink'

// const SubMenu = Menu.SubMenu

class Sidebar extends React.Component {

    render() {
        const { Sider } = Layout 
        const { history } = this.props

        return (
            <Sider>
                <div className="title">
                    <h2>Slack Bot</h2>
                    <p>Manager</p>
                </div>
                <br/>
                <Menu defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key={1}>
                        <SidebarLink to={"/"} icon="home" label="Home" history={history}/>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default Sidebar