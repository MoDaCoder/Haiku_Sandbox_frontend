import React, { PureComponent } from 'react'
import Haiku from './Haiku'
import Haikus from './Haikus'
import HaikuForm from './HaikuForm'
import {fetchHaikus} from './actions/haikuActions'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux'

class ComedyContainer extends PureComponent {

    componentDidMount(){
       const haikus = [{haiku: "no", id: 1}]
       this.props.fetchHaikus(haikus)
        // this.props.fetchLists()
    }

    render(){
        return (
            <>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/haikus">
                        <Haikus haikus={this.props.haikus}/>
                    </Route>
                    <Route exact path="/haikus/new">
                        <HaikuForm submitHaiku={this.submitHaiku}/>
                    </Route>
                    <Route>
                        <Haiku/>
                    </Route>
                    <Route exact path="/haikus/:id" render={((routerProps) => <Haiku haiku={this.props.haikus.find(haiku => haiku.id === parseInt(routerProps.match.params.id))} /> ) } />
                </Switch>
                </BrowserRouter>
            </>
        )
    }
}

const mapStateTopProps = state => {
    return {
        haikus: state.haikus
    }
}

export default connect(mapStateTopProps, {fetchHaikus})(ComedyContainer)