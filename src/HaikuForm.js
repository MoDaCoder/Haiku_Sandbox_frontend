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
            title: this.props.haiku.attributes ? this.props.haiku.attributes.title : "",
            haiku: this.props.haiku ? this.props.haiku.haiku : "",
            genre: this.props.haiku ? this.props.haiku.genre : "",
            id: this.props.haiku ? this.props.haiku.id : Math.floor(Math.random() * Math.floor(1000))
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        if(!this.props.haiku){
            this.props.addHaiku(this.state)
        } else {
            this.props.editHaiku(this.state)
        }
        this.setState({ title: "", id: "" })
        this.props.history.push('/haikus')
    }

    handleChange(event){
        this.setState({
            [event.target.title]: event.target.value
        })
    }

    redirectOrRenderForm = () => {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.title} title="title"/>
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