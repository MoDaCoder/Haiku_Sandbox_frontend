import React, { PureComponent } from 'react'
import ComedyContainer from './ComedyContainer'
import TragedyContainer from './TragedyContainer'
// import { Route, Switch } from 'react-router-dom'
// import {connect} from 'react-redux'

class HaikuContainer extends PureComponent {

    render(){

        return(
            <>
            <div className="container">
                <div className="btn-grid">
                    <div className="btn">
                        <strong><span>Comedy Haikus</span></strong>
                        <ComedyContainer/>
                    </div>
                    <div className="btn">
                        <strong><span>Tragedy Haikus</span></strong>
                        <TragedyContainer/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default HaikuContainer
// export default connect((HaikuContainer))
