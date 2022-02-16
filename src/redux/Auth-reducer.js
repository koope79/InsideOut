import { AuthAPI, AuthApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';


let initialState = {
    login: null,
    pass: null,
    isAuth: false,
    emotion: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                emotion: action.data.login,  // заглушка
                ...action.data
            }
        case LOGOUT:
            return{
                ...state,
                login: null,
                pass: null,
                isAuth: false,
                emotion: null
            }
        default:
            return state;
    }
}

export const setUserData = (login, pass, isAuth) => ({type: SET_USER_DATA, data: {login, pass, isAuth}});
export const logOut = () => ({type: LOGOUT});   // заглушка

export const logIn = (login, pass) => {
    return (dispatch) => {
        const data = AuthAPI.getUser(login, pass);
        if(data.length > 0) dispatch(setUserData(data[0].login, data[0].pass, true))
        //const reqEmotion = AuthApi.getEmotion();
    }
}

export default authReducer;


