import { AuthApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';


let initialState = {
    login: null,
    pass: null,
    isAuth: false,
    emotion: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                emotion: true,
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
export const logOut = () => ({type: LOGOUT});

// export const logIn = (login, pass) => {
//     return (dispatch) => {
//         const data = AuthApi.logIn(login, pass);
//         const reqEmotion = AuthApi.getEmotion();
//     }
// }

export default authReducer;


