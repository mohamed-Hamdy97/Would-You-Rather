import { showLoading,hideLoading } from "react-redux-loading";
import { _getUsers, _getQuestions } from '../utils/_DATA'
import { getUsers } from './users';
import { getQuestions } from './questions';


function _getInitialData() {
    return Promise.all([
        _getQuestions(),
        _getUsers()
    ]).then(([questions, users]) => ({
        questions,
        users,
    }))

}


export function getInitialDatat() {
    return (dispatch) => {
        dispatch(showLoading())
        return _getInitialData()
            .then(({ questions, users }) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                dispatch(hideLoading())
            })
    }
}