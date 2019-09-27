import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { handleSaveQuestion } from "../actions/questions";

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }
    handleOptionOne = (e) => {
        const { value } = e.target
        this.setState({
            optionOne: value
        })
    }
    handleOptionTwo = (e) => {
        const { value } = e.target
        this.setState({
            optionTwo: value
        })
    }
    handleSubmit = (e) => {
        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props
        e.preventDefault()
        dispatch(handleSaveQuestion(optionOne, optionTwo))
        /* dispatch newQuestion */
        this.setState({
            optionOne: '',
            optionTwo: '',
            toHome: true
        })
    }
    render() {
        if (this.state.toHome) {
            return <Redirect to='/' x="d" />
        }

        const { optionOne, optionTwo } = this.state
        return (
            <div className="newQuestion">
                <h1>Create New Question</h1>
                <div className="questionContainer">
                    <h4>complete the question </h4>
                    <h2>Would You Rather</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={optionOne}
                            onChange={this.handleOptionOne}
                            placeholder="Enter Option One Text Here"
                        />
                        <h3>OR</h3>
                        <input
                            type="text"
                            value={optionTwo}
                            onChange={this.handleOptionTwo}
                            placeholder="Enter Option Two Text Here"
                        />
                        <button style={{ opacity: (optionOne === '' || optionTwo === '') ? .5 : '' }} disabled={(optionOne === '' || optionTwo === '')} >Submit</button>
                    </form>
                </div>
            </div >
        )
    }
}


export default connect()(NewQuestion)