import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Haikus extends PureComponent {
  render() {
    return (
      <>
        <ul>
          {/* {this.props.haikus && this.props.haikus.map((haiku) => haiku && ( <Link to={`/haikus/${haiku.id}`}> <li className="haikus">{haiku.title}</li></Link>))} */}
          {this.props.haikus.map((haiku) => <Link to={`/haikus/${haiku.id}`}><li className="haikus">{haiku.title}</li></Link>)}
        </ul>
      </>
    );
  }
}

Haikus.defaultProps = {
  haikus: [
    {
      title: "example haiku",
      haiku:
        "Haikus are easy But sometimes they don't make sense Refrigerator.",
      genre: "Comedy",
      id: 934,
    },
  ],
};
