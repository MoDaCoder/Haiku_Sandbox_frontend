import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addHaiku } from './actions/haikuActions'
import { editHaiku } from './actions/haikuActions'

class HaikuForm extends Component {

    // Normally do not set state directly to props 
    constructor(props){
        super(props)
        this.state = {
            id: this.props.haiku ? this.props.haiku.id : "",
            title: this.props.haiku ? this.props.haiku.title : "",
            haiku: this.props.haiku ? this.props.haiku.haiku : "",
            genre: this.props.haiku ? this.props.haiku.genre : ""
            
            // title: this.props.haiku ? this.props.haiku.attributes.title : "",
            // haiku: this.props.haiku ? this.props.haiku.attributes.haiku : "",
            // genre: this.props.haiku ? this.props.haiku.attributes.genre : "",
            // id: this.props.haiku ? this.props.haiku.id : ""
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        if(!this.props.haiku){
            this.props.addHaiku(this.state)
        } else {
            this.props.editHaiku(this.state)
        }
        this.setState({ title: "", haiku: "", genre: "" ,id: "" })
        this.props.history.push('/haikus')
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value

        })
    }

    redirectOrRenderForm = () => {
        return (
            
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.title} name="title"/>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.haiku} name="haiku"/>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.genre} name="genre"/>
                <input type="submit"/>
            </form>
        )
}
    render(){
        return (
            <>
                {this.redirectOrRenderForm()}
            </>
        )
    }

}

export default withRouter(connect(null, { addHaiku, editHaiku })(HaikuForm))