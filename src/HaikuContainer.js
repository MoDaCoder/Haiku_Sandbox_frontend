import React, { PureComponent } from "react";
import ComedyContainer from "./ComedyContainer";
import TragedyContainer from "./TragedyContainer";
import { Route, Switch } from "react-router-dom";
import { fetchHaikus } from "./actions/haikuActions";
import Haiku from "./Haiku";
import Haikus from "./Haikus";
import { connect } from "react-redux";

class HaikuContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchHaikus();
  }



  render() {

    // const haikkus = this.props
    // console.log(haikkus)
    // console.log({haikus})
    
    return (
      <>
        <Switch>
          <Route exact path="/haikus">
            <Haikus haikus={this.props.haikus} />
          </Route>


          {/* <Route exact path='/haikus/:id' render={props =>{
          const haiku = haikkus.find(haiku => haiku.id === props.match.params.id)
          return <Haiku haiku={haiku} {...props}/>
          }
        }/> */}
          <Route exact path="/haikus/:id" render={((routerProps) => <Haiku haiku={this.props.haikus.find(haiku => haiku.id === parseInt(routerProps.match.params.id))} /> ) }/>

          {/* <Route exact path="/haikus/:id" render={((router) => <Haiku history={props.routerProps.history} haiku={props.haikus.find(haiku => haiku.id === parseInt(routerProps.match.params.id))} /> ) } /> */}
          <div className="container">
            <div className="btn-grid">
              <div className="btn">
                <strong>
                  <span>Comedy Haikus</span>
                </strong>
                <Route exact path="/comdeyHaikus">
                  <ComedyContainer />
                </Route>
              </div>
              <div className="btn">
                <strong>
                  <span>Tragedy Haikus</span>
                </strong>
                <Route exact path="/tragedyHaikus">
                  <TragedyContainer />
                </Route>
              </div>
            </div>
          </div>
        </Switch>
      </>
    );
  }
}

const mapStateTopProps = ({ haikus }) => {
  return {
    haikus
  };
};

export default connect(mapStateTopProps, { fetchHaikus })(HaikuContainer);
