import React from 'react'

export default () => (
    <div className="loading-modal">
        <div className="loading-backdrop"/>
        <div className="loading-content">
            <div align="center">
                <img src="/loading.gif" className="loading" alt="loading" />
                <h2>Loading...</h2>
            </div>
        </div>
    </div>
)