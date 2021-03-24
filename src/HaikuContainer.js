import React, { PureComponent } from "react";
import ComedyContainer from "./ComedyContainer";
import TragedyContainer from "./TragedyContainer";
import NewHaiku from "./CreateHaiku";
import Haiku from "./Haiku";
import Haikus from "./Haikus";
import Home from "./HomeContainer";
import { Route, Switch } from "react-router-dom";
import { fetchHaikus } from "./actions/haikuActions";
import { connect } from "react-redux";

class HaikuContainer extends PureComponent {
  componentDidMount() {
    console.log('a')
    this.props.fetchHaikus();
    console.log('b')
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/newHaiku" component={NewHaiku}/>
          <Route exact path="/haikus">
            <Haikus haikus={this.props.haikus} />
          </Route>
          <Route exact path="/haikus/:id" render={((routerProps) => <Haiku haiku={this.props.haikus.find(haiku => haiku.id === parseInt(routerProps.match.params.id))} /> ) }/>
          <div className="container">
            <div className="btn-grid">
              <div className="btn">
                <strong>
                  <span>Comedy Haikus</span>
                </strong>
                <Route path="/comdeyHaikus" component={ComedyContainer}/>
                  {/* <ComedyContainer />
                </Route> */}
              </div>
          </div>
          </div>
          <div className="container1">
            <div className="btn1">
              <div className="btn-grid1">
                <strong>
                  <span>Tragedy Haikus</span>
                </strong>
                <span>HELLO IM WORKING</span>
                <Route path="/tragedyHaikus" component={TragedyContainer}/>
                  {/* <TragedyContainer />
                </Route> */}
              </div>
            </div>
          </div>
        </Switch>
      </>
    );
  }
}

const mapStateTopProps = ({ haikus }) => {
  // It deconstructs the state into an objects
  return {
    haikus
  };
};

export default connect(mapStateTopProps, { fetchHaikus })(HaikuContainer);
