import React from 'react'

function home() {
    return (
        <div className="br">
            <div className="br-header">
                <h1>Header</h1>                
            </div>
            <div className="br-body">
                <div className="br-body-1">
                    <div className="br-circle" />
                    Left Page
                </div>
                <div className="br-body-1 br-body-2">
                    <div className="br-circle" />
                    Right Page
                </div>
            </div>
        </div>
    )
}

export default home
