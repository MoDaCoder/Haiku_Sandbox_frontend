import React, {PureComponent} from 'react'
import Haiku from './Haiku'
import {Link} from 'react-router-dom'

export default class Haikus extends PureComponent {

render(){
    // debugger
    return (
        <ul>
            {/* MIGHT HAVE TO CHANGE THIS IN A MINUTE */}
            {/* This will render me a list of haikus with links to an individual haiku */}
            {/* {this.props.haikus.map((haiku) => <Link to={`/haikus/${haiku.id}`}><li className="haikus" key={haiku.id}>{haiku.title}</li></Link>)} */}
            {this.props.haikus.map((haiku) => <Link to={`/haikus/${haiku.id}`}><li className="haikus" key={haiku.id}><Haiku haiku={haiku}/></li></Link>)}
        </ul>
        )
    }
}


Haikus.defaultProps = {
haikus: [{title:"example haiku", haiku:"Haikus are easy But sometimes they don't make sense Refrigerator.", genre:"Comedy", id: 934}]
}