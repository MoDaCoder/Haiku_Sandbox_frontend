import { Link } from "react-router-dom";

function Haikus(props){ 
    return (
      <>
        <ul>
          {props.haikus.map((haiku) => <Link to={`/haikus/${haiku.id}`}><li className="haikus">{haiku.title}</li></Link>)}
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