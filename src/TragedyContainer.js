import React, { PureComponent } from 'react'
import Haiku from './Haiku'
import Haikus from './Haikus'
// import HaikuForm from './HaikuForm'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import haikus from './actions/haikus'
// import {connect} from 'react-redux'

class TragedyContainer extends PureComponent {

    render(){

        return (
            <>
                <BrowserRouter>
                <Switch>
                {/* <Haiku/> */}
                <Haikus/>
                <Route exact path="/haikus/:id" render={((routerProps) => <Haiku haiku={this.props.haikus.find(haiku => haiku.id === parseInt(routerProps.match.params.id))} /> ) } />
                {/* <HaikuForm/> */}
                {/* <span>Haiku.js</span>
                <br></br>
                <span>Haikus.js</span>
                <br></br>
                <span>HaikuForm.js</span>
                <br></br>
                <span>New Haiku Link</span>
                <br></br> */}
                </Switch>
                </BrowserRouter>

            </>
        )
    }
}

export default TragedyContainer
// export default connect 