import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ViewResults from "./ViewResults";
import SaveQuestion from "./saveQuestion";

class ViewPoll extends Component {

    render() {

        const { question, answeredQ, AuthUser, avatarURL, name, errorPage } = this.props

        
        if (errorPage) {
            return <Redirect to='questions/errorPage' />
        }
        return (
            <div>
                {!answeredQ ?
                    <SaveQuestion question={question} avatarURL={avatarURL} name={name} />
                    :
                    <ViewResults question={question} avatarURL={avatarURL} AuthUser={AuthUser} name={name} />
                }
            </div>
        )
    }
}
function mapStateToProps({ AuthUser, users, questions }, props) {
    const { id } = props.match.params
    const question = questions[id]
    return {
        AuthUser,
        question: question ? question : null,
        answeredQ: question
            ? Object.keys(users[AuthUser].answers).includes(id)
            : null,
        name: question
            ? users[question.author].name
            : null,
        avatarURL: question
            ? users[question.author].avatarURL
            : null,
        errorPage: question ? false : true
    }

}
export default connect(mapStateToProps)(ViewPoll)