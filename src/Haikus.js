import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'

export default class Haikus extends PureComponent {

render(){
    return (
        <ul>
            {this.props.haikus.map((haiku) => <Link to={`/haikus/${haiku.id}`}><li key={haiku.id}>{haiku.title}</li></Link>)}
        </ul>
    )
    }
}


Haikus.defaultProps = {
haikus: [{title:"example haiku", haiku:"Haikus are easy But sometimes they don't make sense Refrigerator.", genre:"Comedy"},{title:"example haiku", haiku:"Haikus are easy But sometimes they don't make sense Refrigerator.", genre:"Comedy"},{title:"example haiku", haiku:"Haikus are easy But sometimes they don't make sense Refrigerator.", genre:"Comedy"}]
}