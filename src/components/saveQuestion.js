import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { handlesaveQuestionAnswer } from "../actions/questions";
import ViewResults from "./ViewResults";

class SaveQuestion extends Component {

    state = {
        answer: '',
        toPoll: false
    }
    handleSubmit = (e) => {
        e.preventDefault()

        /* dispatch savequestion */
        this.props.dispatch(handlesaveQuestionAnswer(this.state.answer, this.props.question.id))


        this.setState({
            answer: '',
            toPoll: true
        })
    }
    handleoption = (e) => {
        this.setState({
            answer: e.target.value
        })
    }
    render() {

        const { question, avatarURL, name, AuthUser } = this.props
        const { optionOne, optionTwo } = question



        if (this.state.toPoll) {
            return <ViewResults question={question} avatarURL={avatarURL} AuthUser={AuthUser} name={name} />
        }

        return (
            <div className="question">
                <h2> {name} asks:</h2>
                <div className="other-info">
                    <img
                        src={avatarURL}
                        alt={name}
                    />
                    <div className='question-info'>
                        <h1>Would You Rather</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input onClick={this.handleoption} type='radio' name="option" value="optionOne" />{optionOne.text}
                            </div>
                            <div>
                                <input onClick={this.handleoption} type='radio' name="option" value="optionTwo" />{optionTwo.text}
                            </div>
                            <button style={{ opacity: (this.state.answer === '') ? .5 : '' }} disabled={this.state.answer === ''}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToPops({ AuthUser }, { question, avatarURL, name }) {
    return {
        AuthUser,
        question,
        avatarURL,
        name,
    }
}

export default withRouter(connect(mapStateToPops)(SaveQuestion))