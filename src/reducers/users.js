import { get_users, Update_UserQuestions, Udate_UserAnswers } from '../actions/users'


export default function users(state = {}, action) {
    switch (action.type) {
        case get_users:
            return {
                ...state,
                ...action.users
            }
        case Update_UserQuestions:
            console.log(state[action.AuthId].questions)
            return {
                ...state,
                [action.AuthId]: {
                    ...state[action.AuthId],
                    questions: state[action.AuthId].questions.concat([action.qId])
                }
            }
        case Udate_UserAnswers:
            const { qId,answer,AuthUser } = action
            return {
                ...state,
                [AuthUser]:{
                    ...state[AuthUser],
                    answers:{
                        ...state[AuthUser].answers,
                        [qId]:answer
                    }
                }
            }
        default:
            return state
    }
}