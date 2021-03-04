import { connect } from 'react-redux'
import {deleteHaiku} from './actions/haikuActions'
import {withRouter} from 'react-router-dom'
import HaikuForm from './HaikuForm'

function Haiku(props){

    const handleClick = () => {
        props.deleteHaiku(props.haiku.id)
        props.history.push('/haikus')
    }
    // debugger
    return (
        <>
        {/* <li>{props.haiku && props.haiku.title}</li>
        {props.haiku && props.haiku.haiku}<br></br>
        {props.haiku && props.haiku.genre}<button onClick={handleClick}>Delete</button> */}
        <li>{props.haiku.attributes && props.haiku.attributes.title}</li>
        {props.haiku.attributes && props.haiku.attributes.haiku}<br></br>
        {props.haiku.attributes && props.haiku.attributes.genre}<button onClick={handleClick}>Delete</button>
        <div>
        <HaikuForm haiku={props.haiku}/>
        {/* NEED TO PUT HAIKU FORM IN edit ROUTE AND NEED THOSE EDITS TO BE PASSED IN TO EDIT OBJECT AS A POST FETCH AND RENDERED */}
        </div>
        </>
    )
}

export default withRouter(connect(null, { deleteHaiku })(Haiku))