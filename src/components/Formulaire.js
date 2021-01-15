import React, { Component } from 'react'

class Formulaire extends Component {

    state = {
        message: "",
        length: this.props.length
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props

        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)

        this.setState({ message: '', length})
    }

    handleChange = (event) => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({message, length})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.createMessage()
    }

    handlekeyUp = event => {
        if (event.key  === 'Enter') {
            this.createMessage()
        }
    }
    render () {
        return (
            <div>
                <form 
                className="form"
                onSubmit={this.handleSubmit}>
                    <textarea
                    required
                    maxLength="140"
                    value={this.state.message}
                    onKeyUp={this.handlekeyUp}
                    onChange={this.handleChange}/>
                    <div className="info">
                        {this.state.length}
                    </div>
                    <button type="submit">
                        Envoyer
                    </button>
                </form>
            </div>
        )
    }
}

export default Formulaire;