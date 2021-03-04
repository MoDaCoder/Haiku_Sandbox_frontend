import React, { PureComponent } from 'react'
import ComedyContainer from './ComedyContainer'
import TragedyContainer from './TragedyContainer'
import { Route, Switch } from 'react-router-dom'
import {fetchHaikus} from './actions/haikuActions'
import Haiku from './Haiku'
import Haikus from './Haikus'
import {connect} from 'react-redux'

class HaikuContainer extends PureComponent {

    componentDidMount(){
        const haikus = [{title: "Time Winds", haiku: "Trees softly strain night winds, tugging back the boughs. Back. Falling to childhood.", genre: "poetic",  id:103}]
        this.props.fetchHaikus(haikus)
    }

    render(){
        // debugger
        return(
            <>
            <Switch>
{/* IF I TRY TO DEFINE HAIKU CONTAINER AS HAIKU_GENRE ROUTE HERE EVERYTHING FREEZES UP !!!DONT DO THAT TOASTER WILL CRASH AGAIN Dx!!! */}
                <Route exact path="/haikus">
                    <Haikus haikus={this.props.haikus}/>
                </Route>
                <Route exact path="/haikus/:id" render={((routerProps) => <Haiku history={routerProps.history} haiku={this.props.haikus && this.props.haikus.find(haiku => haiku.id === routerProps.match.params.id)} /> ) } />
            <div className="container">
                <div className="btn-grid">
                    <div className="btn">
                        <strong><span>Comedy Haikus</span></strong>
                <Route exact path="/comdeyHaikus">                        
                    <ComedyContainer/>
                </Route>
                    </div>
                    <div className="btn">
                        <strong><span>Tragedy Haikus</span></strong>
                <Route exact path="/tragedyHaikus">
                    <TragedyContainer/>
                </Route>                    
                    </div>
                </div>
            </div>
            </Switch>
            </>
        )
    }
}

const mapStateTopProps = ({ haikus }) => {
    return {
        haikus
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchHaikus: (haikus) => dispatch({type: "FETCH_HAIKUS", payload: haikus})
//     }
// }


// export default connect(mapStateTopProps, mapDispatchToProps)(HaikuContainer)
export default connect(mapStateTopProps, {fetchHaikus})(HaikuContainer)