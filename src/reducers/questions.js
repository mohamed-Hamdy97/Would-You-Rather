import { get_Questions, Add_question, save_QuestionAnswer } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case get_Questions:
            return {
                ...state,
                ...action.questions
            }
        case Add_question:
            console.log(state)
            return {
                ...state,
                [action.question.id]: {
                    ...action.question
                },
            }
        case save_QuestionAnswer:
            const { qId,AuthUser, answer } = action;
            // console.log(action.AuthUser)
            // console.log(qId)

            return {
                ...state,
                [qId]: {
                    ...state[qId],
                    [answer]: {
                        ...state[qId][answer],
                        votes: state[qId][answer].votes.concat([AuthUser])
                    }
                }
            }
        /* 
        ...state,
    [qid]: {
      ...state[qid],
      [answer]: {
        ...state[qid][answer],
        votes: state[qid][answer].votes.concat([authedUser])
      }
    }
        */
        default:
            return state
    }
}