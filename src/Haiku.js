import { connect } from "react-redux";
import { deleteHaiku } from "./actions/haikuActions";
import { withRouter } from "react-router-dom";
import HaikuForm from "./HaikuForm";

function Haiku(props) {
  // debugger
  const handleClick = () => {
    console.log(props.haiku)
    props.deleteHaiku(props.id)
    props.history.push('/haikus')
  };
  console.log(props);
  // debugger
  return (
    <>
      <li>{props.haiku && props.haiku.title}</li>
      {props.haiku && props.haiku.haiku}
      <br></br>
      {props.haiku && props.haiku.genre}
      <button onClick={handleClick}>Delete</button>
      <div>
        <HaikuForm haiku={props.haiku} />
        {/* NEED TO PUT HAIKU FORM IN edit ROUTE AND NEED THOSE EDITS TO BE PASSED IN TO EDIT OBJECT AS A POST FETCH AND RENDERED */}
      </div>
    </>
  );
}

export default withRouter(connect(null, { deleteHaiku })(Haiku));
