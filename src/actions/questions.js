import { showLoading, hideLoading } from "react-redux-loading";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { UpdateUserQuestions, QuestionAnswer } from "./users";

export const get_Questions = "get_Questions"
export const Add_question = "Add_question"
export const save_QuestionAnswer = 'save_QuestionAnswer'


export function getQuestions(questions) {
    return {
        type: get_Questions,
        questions
    }
}

export function AddQuestion(question) {
    return {
        type: Add_question,
        question
    }
}

export function saveQuestionAnswer(answer, qId, AuthUser) {
    return {
        type: save_QuestionAnswer,
        answer,
        qId,
        AuthUser

    }
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { AuthUser } = getState()
        dispatch(showLoading())
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: AuthUser
        })
            .then((question) => {
                dispatch(AddQuestion(question))
                dispatch(UpdateUserQuestions(AuthUser, question.id))
                dispatch(hideLoading())
            })
    }
}

export function handlesaveQuestionAnswer(answer, qId) {
    return (dispatch, getState) => {
        const { AuthUser } = getState()
        dispatch(showLoading())
        return _saveQuestionAnswer({
            authedUser: AuthUser,
            qid: qId,
            answer
        })
            .then(() => {
                dispatch(saveQuestionAnswer(answer, qId, AuthUser))
                dispatch(QuestionAnswer(AuthUser, qId, answer))
                dispatch(hideLoading())
            })

    }
}