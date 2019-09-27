import { showLoading,hideLoading } from "react-redux-loading";
import { _getUsers } from "../utils/_DATA";

export const get_users = "get_users"
export const Update_UserQuestions = "Update_UserQuestions"
export const Udate_UserAnswers ='Udate_UserAnswers'


export function getUsers(users) {
    return {
        type: get_users,
        users
    }
}

export function UpdateUserQuestions(AuthId,qId){
    return{
        type:Update_UserQuestions,
        AuthId,
        qId
    }
}

export function QuestionAnswer(AuthUser,qId,answer){
    return{
        type:Udate_UserAnswers,
        AuthUser,
        qId,
        answer
    }
}


export function handleGetUsers() {
    return (dispatch) => {
        dispatch(showLoading())
        return _getUsers()
            .then(( users ) => {
                dispatch(getUsers(users))
                dispatch(hideLoading())
            })


    }
}