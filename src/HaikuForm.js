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
                <label className="label" htmlFor="title">Title: </label>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.title} name="title"/><br></br>
                <label className="label" htmlFor="genre">Genre: </label>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.genre} name="genre"/><br></br>
                <label className="label" htmlFor="haiku">Haiku: </label>
                <textarea type="text" onChange={(event) => this.handleChange(event)} value={this.state.haiku} name="haiku"/>
                <input type="submit"/>
            </form>
        )
}
    render(){
        return (
            <>
                {this.redirectOrRenderForm()}
                <div className="haikus" id="exampleHaiku">
                    <h4 >Example Haiku:</h4>
                    <span>
                    Haikus are easy<br></br>
                    But sometimes they don't make sense<br></br>
                    Refrigerator</span>
                </div>
                <div className="haikus" id="haikuRules">
                    <h4>Haiku Rules:</h4>
                    <li>The entire poem consists of just three lines, with 17 syllables in total.</li>
                    <li>The first line is 5 syllables.</li>
                    <li>The second line is 7 syllables.</li>
                    <li>The third line is 5 syllables.</li>
                </div>
            </>
        )
    }

}

export default withRouter(connect(null, { addHaiku, editHaiku })(HaikuForm))