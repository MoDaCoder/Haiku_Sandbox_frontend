import { connect } from 'react-redux'
import {deleteHaiku} from './actions/haikuActions'
import {withRouter} from 'react-router-dom'
import HaikuForm from './HaikuForm'

function Haiku(props){

    const handleClick = () => {
        props.deleteHaiku(props.haiku.id)
        props.history.push('/haikus')
    }

    return (
        <>
        <li>{props.haiku && props.haiku.title}<button onClick={handleClick}>Delete</button></li>
        <HaikuForm haiku={props.haiku}/>
        </>
    )
}

export default withRouter(connect(null, { deleteHaiku })(Haiku))