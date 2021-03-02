// import { connect } from 'react-redux'
// // import deleteHaiku from './actions/deleteHaiku'
// import {withRouter} from 'react-router-dom'
import HaikuForm from './HaikuForm'

function Haiku(props){

    return (
        <>
            {/* <li>{props.list && props.list.name}</li> */}
            <HaikuForm haiku={props.haiku}/>
        </>
    )
}

export default Haiku
// export default withRouter