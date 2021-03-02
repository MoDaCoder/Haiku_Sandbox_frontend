import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addHaiku } from './actions/haikuActions'

// import editHaiku from './actions/editHaiku'

class HaikuForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: this.props.haiku ? this.props.haiku.title : "",
            id: this.props.haiku ? this.props.haiku.id : ""
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
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.title} name="title"/>
                <input type="submit"/>
            </form>
        )
}

    render(){
        debugger
        return (
            <>
                {this.redirectOrRenderForm()}
            </>
        )
    }

}

export default withRouter(connect(null, { addHaiku })(HaikuForm))