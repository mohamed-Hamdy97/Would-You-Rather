import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewResults({ question, name, avatarURL, AuthUser }) {
    const { optionOne, optionTwo } = question
    const optOneVotes = optionOne.votes.length
    const optTwoVotes = optionTwo.votes.length
    const opt1Percent =
        (((optOneVotes / (optOneVotes + optTwoVotes)) * 100)).toFixed(0) + "%"
    const opt2Percent = 
        ((optTwoVotes / (optOneVotes + optTwoVotes)) * 100).toFixed(0) + "%"
    return (
        <div className="question">
            <h2>Asked by {name}</h2>

            <div className="other-info">
                <div className="ImgPoll">
                    <img
                        src={avatarURL}
                        alt={name}
                    />
                </div>
                <div className='question-info'>
                    <h3>Results:</h3>
                    <div className={optionOne.votes.includes(AuthUser) ? 'AuthOption' : "optionOne"}>
                        <span className="yourVotes" style={{ display: optionOne.votes.includes(AuthUser) ? 'block' : 'none' }}>your vote</span>
                        <h4>Would you rather {optionOne.text} ? </h4>
                        <div className='progressBar'>{opt1Percent === '0%' ? opt1Percent : ''}<span style={{ 'width': `${opt1Percent}` }}>{opt1Percent} </span></div>
                        <p>{optOneVotes} of {optOneVotes + optTwoVotes}</p>
                    </div>
                    <div className={optionTwo.votes.includes(AuthUser) ? 'AuthOption' : "optionTwo"}>
                        <span className="yourVotes" style={{ display: optionTwo.votes.includes(AuthUser) ? 'block' : 'none' }}>your vote</span>
                        <h4>Would you rather {optionTwo.text} ? </h4>
                        <div className='progressBar'>{opt2Percent === '0%' ? opt2Percent : ''}<span style={{ 'width': `${opt2Percent}` }}>{opt2Percent} </span></div>
                        <p>{optTwoVotes} of {optOneVotes + optTwoVotes}</p>
                    </div>
                    <Link to='/'><button className="backBtn">Back To Home</button> </Link>
                </div>

            </div>

        </div>
    )
}