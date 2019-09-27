import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";
import logo from '../images/react.png'

class Login extends Component {
    state = {
        choice: ''
    }

    handleSubmit = (e) => {
        const { choice } = this.state
        e.preventDefault()
        this.props.dispatch(setAuthUser(choice))

    }
    handleChoice = (e) => {
        this.setState({
            choice: e.target.value
        })
    }

    render() {
        const { users, id } = this.props
        return (
            <div className="login">
                <div className='header'>
                    <h2>Welcome to the Would You Rather App!</h2>
                    <p>please sign in to continue</p>
                </div>
                <img
                    src={logo}
                    alt="profile"
                />
                <h3>Sign in</h3>
                <form onSubmit={this.handleSubmit}>
                    <select onClick={(e) => this.handleChoice(e)} >
                        <option disabled>Choose...</option>
                        {id.map((user) => (
                            <option value={user} key={user} >{users[user].name}</option>
                        )
                        )}

                    </select>
                    <button style={{ opacity: (this.state.choice === '') ? .5 : '' }} disabled={this.state.choice === ''} >submit</button>
                </form>
            </div>
        )
    }
}
function mapStateToProps({ users }) {
    return {
        id: Object.keys(users),
        users
    }
}

export default connect(mapStateToProps)(Login)