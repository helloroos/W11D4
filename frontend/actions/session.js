import { deleteSession, postSession, postUser } from "../utils/session";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logOutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const createNewUser = (formUser) => dispatch => postUser(formUser)
    .then((user) => {
        return dispatch(receiveCurrentUser(user))});

export const login = (formUser) => dispatch => postSession(formUser)
    .then((user) => {
        return dispatch(receiveCurrentUser(user))});

export const logOut = () => dispatch => deleteSession()
    .then(() => {
        // debugger
        return dispatch(logOutCurrentUser())});

