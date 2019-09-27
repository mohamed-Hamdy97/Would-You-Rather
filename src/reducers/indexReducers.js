import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import AuthUser from './AuthUser'
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
    questions,
    users,
    AuthUser,
    loadingBar: loadingBarReducer
})