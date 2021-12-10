import { FearsApi } from "../api/api";

const SET_DATA_FEARS = 'SET_DATA_FEARS';
const SELECT_FEAR_DATA = 'SELECT_FEAR_DATA';
const RESET_FEARS_DATA = 'RESET_FEARS_DATA';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';


let initialState = {
    fearsData: [],
    currentFear: [],
    countFears: null,
    errorMessage: ''
};

const fearsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_FEARS:
            return {
                ...state,
                fearsData: [...action.data]
            }
        case SELECT_FEAR_DATA:
            return{
                ...state,
                currentFear: action.dataFear
            }
        case RESET_FEARS_DATA:
            return {
                ...state,
                fearsData: [],
                currentFear: [],
                countFears: null
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.message
            }
        default:
            
            return state;
    }
}

const setDataFears = (data) => ({ type: SET_DATA_FEARS, data });
export const selectFearData = (dataFear) => ({type: SELECT_FEAR_DATA, dataFear});
export const resetFearData = () => ({type: RESET_FEARS_DATA});
export const setErrorMessage = (message) => ({type:SET_ERROR_MESSAGE, message});

export const getFearsData = (searchFormData) => {
    return async (dispatch) => {
        try {
            const data = await FearsApi.getFearData(searchFormData);
            dispatch(setDataFears(data));
        }
        catch {
            alert('no Memories');
        }
    }
}

export const countFears = () => {
    return (dispatch) => {
        try{
            const req = FearsApi.countFears();
        }
        catch{
            alert('error');
        }
    }
}

export const saveFear = (fearData, urlArr) => {
    return (dispatch) => {
        try{
            fearData.src = urlArr;
            const req = FearsApi.saveFearData(fearData);
            dispatch(setErrorMessage('error'));
        }
        catch {
            alert('error');
        }
    }
}

export default fearsReducer;


