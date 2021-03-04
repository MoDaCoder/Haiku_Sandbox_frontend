import React, { PureComponent } from 'react'
import HaikuForm from './HaikuForm'
// import Haiku from './Haiku'
// import Haikus from './Haikus'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

class ComedyContainer extends PureComponent {

    render(){
        return (
            <>
                {/* <BrowserRouter> */}
                {/* <Switch> */}
                <HaikuForm />
                {/* </Switch> */}
                {/* </BrowserRouter> */}
            </>
        )
    }
}

export default ComedyContainer