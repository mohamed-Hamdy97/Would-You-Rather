import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from "./question";


class HomePage extends Component {
  state = {
    Un_answeredQ: true
  }

  handleUnAnsweredchange = () => {
    this.setState({
      Un_answeredQ: true
    })
  }
  handleAnsweredchange = () => {
    this.setState({
      Un_answeredQ: false
    })
  }

  render() {
    const { answeredQ, unAnsweredQ } = this.props
    const { Un_answeredQ } = this.state
    return (
      <div className='HomePage'>
        <div className='links'>
          <div className="link">
            <button onClick={this.handleUnAnsweredchange} className={Un_answeredQ ? 'active1' : ''}>unAnswered Questions</button>
          </div>
          <div className="link">
            <button onClick={this.handleAnsweredchange} className={Un_answeredQ ? '' : 'active1'}>Answered Questions</button>
          </div>
        </div>
        <div className='questions'>
          <ul>
            {Un_answeredQ ?
              unAnsweredQ.map((id) => (
                <li key={id}>
                  <Question questionID={id} />
                </li>
              ))
              :
              answeredQ.map((id) => (
                <li key={id}>
                  <div>
                    <Question questionID={id} />
                  </div>
                </li>
              ))
            }
          </ul>
          <div style={{
          opacity: .45,
          color: 'gray',
          margin:'20px'
        }}>Add more questions</div>
        </div>
        
      </div>
    );
  }
}


function mapStateToProps({ questions, AuthUser, users }) {
  const allQuestionsId = Object.keys(questions)

  const answeredQ = Object.keys(users[AuthUser].answers)

  const unAnsweredQ = allQuestionsId.filter((qid) => {
    return !answeredQ.includes(qid)
  })

  return {
    answeredQ: answeredQ.sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    unAnsweredQ: unAnsweredQ.sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    AuthUser
  }
}


export default connect(mapStateToProps)(HomePage);
