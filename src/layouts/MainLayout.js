import React from 'react'
import { Layout, Row, Col } from 'antd'

import Loading from './../components/ui/Loading'
import Siderbar from './../components/ui/Sidebar'
import Sticker from '../components/ui/Sticker'

class MainLayout extends React.Component {

    state = {
        loading: false
    }

    toggleLoading = () => {
        this.setState({ ...this.state, loading: !this.state.loading })
    }

    render() {

        const childrenWithProps = React.Children.map(this.props.children, child =>
            React.cloneElement(child, { toggleLoading: this.toggleLoading })
        )
      
        const { Header, Footer, Content} = Layout

        return (
            <React.Fragment>
                <Sticker/>
                { this.state.loading && <Loading/>}
                <Layout style={{ minHeight: '100vh' }}>
                    <Siderbar history={this.props.history} />
                    <Layout>
                        <Header>
                            <h2>{this.props.title}</h2>
                        </Header>
                        <Content style={{ margin: '16px' }}>
                            <Row>
                                <Col>
                                   { childrenWithProps }
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