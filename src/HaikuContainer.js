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
            <div className="container">
                <div className="grid-btn">
                    <ComedyContainer/>
                    <TragedyContainer/>
                </div>
            </div>
            </>
        )
    }
}

export default HaikuContainer
// import {connect} from 'react-redux'
