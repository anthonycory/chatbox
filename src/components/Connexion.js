import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
    state = {
        pseudo: '',
        form: false
    }

    handleChange = (event) => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ form: true})
    }

    render() {
        if (this.state.form) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect> 
        }
    return (
            <div className="connexionBox">
                <form className="connexion" onSubmit={this.handleSubmit}>
                    <input
                    value={this.state.pseudo}
                    onChange={this.handleChange} 
                    placeholder="pseudo"
                    type="text"
                    required />
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
}

export default Connexion;