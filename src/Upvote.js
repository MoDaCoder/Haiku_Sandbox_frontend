import React, {Component} from 'react'

class Upvote extends Component {

  constructor() {
      super()
      this.state = {
          vote: 0
      };
  }

  incrementVote = () => {
      this.setState( prevState => ({
              vote: prevState.vote + 1
      }));
  }

  // alarm = () => {
  //   alert("You already voted on this Haiku!");
  // }

  render() {
    // const vote = this.state.vote
    // let button;
    // if (vote == 0){
    //   button = <button className="upvote-action increment" onClick={this.incrementVote}> + </button>;
    // } else {
    //   button = <button className="upvote-action increment" onClick={this.alarm}> + </button>
    // }
    
    return (
      <div className="upvote">
        <span className="upvote"> {this.state.vote} </span>
        {/* {button} */}
        <button className="upvote-action increment" onClick={this.incrementVote}> + </button>
      </div>
    );
  }
}

export default Upvote 