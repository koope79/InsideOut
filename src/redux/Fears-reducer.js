import { FearsApi } from "../api/api";

const SET_DATA_FEARS = 'SET_DATA_FEARS';
const SELECT_FEAR_DATA = 'SELECT_FEAR_DATA';
const RESET_FEARS_DATA = 'RESET_FEARS_DATA';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const SET_COUNT_FEARS = 'SET_COUNT_FEARS';


let initialState = {
    fearsData: [],
    currentFear: [],
    countFears: null,
    countReleaseFears: null,
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
            return {
                ...state,
                currentFear: action.dataFear
            }
        case RESET_FEARS_DATA:
            return {
                ...state,
                fearsData: [],
                currentFear: [],
                countFears: null,
                countReleaseFears: null,
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.message
            }
        case SET_COUNT_FEARS:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setDataFears = (data) => ({ type: SET_DATA_FEARS, data });
export const selectFearData = (dataFear) => ({ type: SELECT_FEAR_DATA, dataFear });
export const resetFearData = () => ({ type: RESET_FEARS_DATA });
export const setErrorMessage = (message) => ({ type: SET_ERROR_MESSAGE, message });
export const setCountFears = (countFears, countReleaseFears) => ({ type: SET_COUNT_FEARS, data: { countFears, countReleaseFears } })

export const getFearsData = (searchFormData) => {
    return async (dispatch) => {
        try {

            const data = await FearsApi.getFearData(searchFormData);
            if (data.length > 0) dispatch(setDataFears(data));
            else { dispatch(setErrorMessage('Ошибка')); }
        }
        catch {
            dispatch(setErrorMessage('Ошибка'));
        }
    }
}

export const countFearsTh = () => {
    return async (dispatch) => {
        try {
            const req = await FearsApi.countFears();
            if (req) dispatch(setCountFears(req.countInLongData, req.countReleaseFears));
        }
        catch {
            alert('error');
        }
    }
}

export const saveFear = (fearData, urlArr) => {
    return (dispatch) => {
        try {
            fearData.src = urlArr;
            const req = FearsApi.saveFearData(fearData);
            if (req.resultCode != 0) dispatch(setErrorMessage('Ошибка'));

        }
        catch {
            alert('error');
        }
    }
}
export const walkingFear = (fearData) => {
    return (dispatch) => {
        try {
            console.log(fearData);
            const req = FearsApi.replaceFear(fearData);
            if (req.resultCode != 0) dispatch(setErrorMessage('Ошибка'));
        }
        catch {
            dispatch(setErrorMessage('Ошибка'));
        }
    }
}

export default fearsReducer;


