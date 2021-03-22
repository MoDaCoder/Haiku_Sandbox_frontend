import { connect } from "react-redux";
import { deleteHaiku } from "./actions/haikuActions";
import { withRouter } from "react-router-dom";
import HaikuForm from "./HaikuForm";

function Haiku(props) {
  // debugger

  const handleClick = () => {
    props.deleteHaiku(props.haiku.id)
    props.history.push('/haikus')
  };
  // debugger
  return (
    <>
      <div className="haiku">
        <li>Title: {props.haiku && props.haiku.title}</li>
        <li>Genre: {props.haiku && props.haiku.genre}</li>
        <li>Haiku: {props.haiku && props.haiku.haiku}</li>
      </div>
      <button onClick={handleClick}>Delete</button>
      <div>
        <HaikuForm haiku={props.haiku} />
        {/* NEED TO PUT HAIKU FORM IN edit ROUTE AND NEED THOSE EDITS TO BE PASSED IN TO EDIT OBJECT AS A POST FETCH AND RENDERED */}
      </div>
    </>
  );
}

export default withRouter(connect(null, { deleteHaiku })(Haiku));
