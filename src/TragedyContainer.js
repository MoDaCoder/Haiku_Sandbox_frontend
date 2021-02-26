import React, { PureComponent } from 'react'
import Haiku from './Haiku'
import Haikus from './Haikus'
import HaikuForm from './HaikuForm'
// import { Route, Switch } from 'react-router-dom'
// import haikus from './actions/haikus'
// import {connect} from 'react-redux'

class TragedyContainer extends PureComponent {

    render(){

        return (
            <>
                <Haiku/>
                <Haikus/>
                <HaikuForm/>
                <span>Haiku.js</span>
                <br></br>
                <span>Haikus.js</span>
                <br></br>
                <span>HaikuForm.js</span>
                <br></br>
            </>
        )
    }
}

export default TragedyContainer
// export default connect 