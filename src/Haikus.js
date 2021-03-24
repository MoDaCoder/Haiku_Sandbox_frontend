import { Link } from "react-router-dom";
import Upvote from "./Upvote"

function Haikus(props){ 
    return (
      <>
        <ul>
          {props.haikus.map((haiku) => <li className="haikus"><Link to={`/haikus/${haiku.id}`}>{haiku.title}</Link><Upvote /></li>)}
        </ul>
      </>
    );
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

export default Haikus