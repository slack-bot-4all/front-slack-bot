import React from 'react'
import { Layout, Row, Col } from 'antd'

import Loading from './../components/ui/Loading'
import Notification from './../components/ui/Notification'
import SideBar from './../components/ui/Sidebar'

class MainLayout extends React.Component {

    render() {

        const { Header, Footer, Content} = Layout

        return (
            <React.Fragment>
                <Notification/>
                <Loading/>
                <Layout style={{ minHeight: '100vh' }}>
                    <SideBar history={this.props.history} />
                    <Layout>
                        <Header>
                            <h2>{this.props.title}</h2>
                        </Header>
                        <Content style={{ margin: '16px' }}>
                            <Row>
                                <Col>
                                   { React.cloneElement(this.props.children) }
                                </Col>
                            </Row>
                        </Content>
                        <Footer className="footer">
                            <div align="center" >
                                <br/>
                                <p>© All rights reserved, 2019. <a href="https://github.com/slack-bot-4all/slack-bot" 
                                        target="_blank" rel="noopener noreferrer">Slack Bot.</a></p>
                            </div>
                        </Footer>
                    </Layout>
                </Layout>
            </React.Fragment>
        )
    }
}

export default MainLayout