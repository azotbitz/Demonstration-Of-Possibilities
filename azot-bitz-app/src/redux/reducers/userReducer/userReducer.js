import {
    LOGIN_ERROR,
    LOGIN_START,
    LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_START, LOGOUT_SUCCESS,
    REGISTER_ERROR,
    REGISTER_START,
    REGISTER_SUCCESS
} from "../../actionTypes";
import {
    loginError,
    loginStart,
    loginSuccess, logoutError,
    logoutStart, logoutSuccess,
    registerError,
    registerStart,
    registerSuccess
} from "../../action";
import {auth} from '../../../components/Firebase';

const initialState = {
    loading: false,
    error: null,
    currentUser: null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case REGISTER_START:
        case LOGIN_START:
        case LOGOUT_START:
            return {
                ...state,
                loading: true
        };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
               currentUser: null
            }
        case REGISTER_ERROR:
        case LOGIN_ERROR:
        case LOGOUT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;

    }
}

export const registerInitiate = (email, password, nickname) => {
    return (dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    nickname
                })
                dispatch(registerSuccess(user))
        })
            .catch((err) => dispatch(registerError(err)))
    }
}

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user))})
            .catch((err) => dispatch(loginError(err)))
    }
}

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then((response) => dispatch(logoutSuccess()))
            .catch((err) => dispatch(logoutError(err)))
    }
}