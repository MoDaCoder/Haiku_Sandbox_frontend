import React, { PureComponent } from 'react'
import Haiku from './Haiku'
import Haikus from './Haikus'
import HaikuForm from './HaikuForm'
// import { Route, Switch } from 'react-router-dom'
// import haikus from './actions/haikus'
// import {connect} from 'react-redux'

class ComedyContainer extends PureComponent {

    render(){

        return (
            <>
                <Haiku/>
                <Haikus/>
                <HaikuForm/>
            </>
        )
    }
}

export default ComedyContainer
// export default connect