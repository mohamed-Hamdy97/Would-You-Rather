import React, { Component } from 'react';
import { connect } from 'react-redux';


class LeaderBoard extends Component {

    render() {
        const { user } = this.props
        const { avatarURL, name, answers, questions } = user
        const answeredQ = Object.keys(answers).length
        const CreatedQ = questions.length
        return (
            <div className="leaderBoard">
                <div className="section">
                    <img
                        src={avatarURL}
                        alt={`avatar of ${name}`}
                    />
                </div>
                <div className="section2">
                    <h2>{name}</h2>
                    <p>Answered Questions  <span>{answeredQ}</span></p>
                    <p>Created Questions   <span>{CreatedQ}</span></p>
                </div>
                <div className="section3">
                    <h3>Score</h3>
                    <p>{answeredQ + CreatedQ}</p>
                </div>

            </div>
        );
    }
}

function mapStateToProps({ users }, { id }) {
    const user = users[id]
    return {
        user,
        
    }
}
export default connect(mapStateToProps)(LeaderBoard);
