import React, { PureComponent } from 'react'
import Haiku from './Haiku'
import Haikus from './Haikus'
import HaikuForm from './HaikuForm'
import {fetchHaikus} from './actions/haikuActions'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux'

class ComedyContainer extends PureComponent {

    componentDidMount(haikus){
       this.props.fetchHaikus(haikus)
    }

    render(){
        return (
            <>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/haikus">
                        <Haikus haikus={this.props.haikus}/>
                    </Route>
                    {/* <Route exact path="/comedyHaikus/new"> */}
                        {/* <HaikuForm submitHaiku={this.submitHaiku}/> */}
                        <HaikuForm />
                    {/* </Route> */}
                    {/* <Route>
                        <Haiku/>
                    </Route> */}
                    <Route exact path="/haikus/:id" render={((routerProps) => <Haiku haiku={this.props.haikus.find(haiku => haiku.id === parseInt(routerProps.match.params.id))} /> ) } />
                </Switch>
                </BrowserRouter>
            </>
        )
    }
}

const mapStateTopProps = ({ haikus }) => {
    return {
        haikus
    }
}

export default connect(mapStateTopProps, {fetchHaikus})(ComedyContainer)