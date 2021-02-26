import React, { PureComponent } from 'react'
import ComedyContainer from './ComedyContainer'
import TragedyContainer from './TragedyContainer'
// import { Route, Switch } from 'react-router-dom'
// import haikus from './actions/haikus'
// import {connect} from 'react-redux'

class HaikuContainer extends PureComponent {

    render(){

        return(
            <>
                <div className="grid-btn">
                    <ComedyContainer/>
                </div>
                <div className="grid-btn">
                    <TragedyContainer/>
                </div>
            </>
        )
    }
}

export default HaikuContainer
// import {connect} from 'react-redux'