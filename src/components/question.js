import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
    handleLike = () => {
        console.log('fd')
    }
    render() {
        const { question, user } = this.props

        return (
            <div>
                <div className='question'>
                    <h2>{user.name} askes:</h2>
                    <div className='other-info'>
                        <img
                            src={user.avatarURL}
                            alt="userAvatar"
                        />
                        <div className='question-info'>
                            <h3>Would You Rather</h3>
                            <p>...  {question.optionOne.text} ...</p>
                            <Link to={`/questions/${question.id}`} >
                                <button className="linkToPoll">
                                    View Poll

                            </button>
                            </Link>

                        </div>
                    </div>

                </div>

            </div>


        )
    }
}

function mapStateToProps({ questions, users }, { questionID }) {
    const question = questions[questionID]
    const user = users[question.author]
    return {
        question,
        user
    }
}
export default withRouter(connect(mapStateToProps)(Question))