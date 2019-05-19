import React from 'react'
import { connect } from 'react-redux'
import {LoadingAction} from '../../actions/LoadingAction'

class Loading extends React.Component {

    closeInFiveSeconds = () => {
        setTimeout(() => {
            this.props.dispatch(LoadingAction.loadingFinish())
        }, 5000)
    }

    render() {
        const { loading } = this.props

        if (loading) {
            this.closeInFiveSeconds()
            return (
                <div className="loading-modal">
                    <div className="loading-backdrop"/>
                    <div className="loading-content">
                        <div align="center">
                            <img src={"/loading.gif"} className="loading" alt="loading" />
                            <h2>Loading</h2>
                        </div>
                    </div>
                </div>
            )
        }

        return null
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading.loading
    }
}

export default connect(mapStateToProps)(Loading)