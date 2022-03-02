import { DreamsApi } from "../api/api";
import { setDreamsProjectionData } from "./Projection-reducer";

const SET_DREAM_DATA = 'SET_FEAR_DATA';
const RESET_DATA_DREAMS = 'RESET_DATA_DREAMS';
const SET_MESSAGE = 'SET_MESSAGE';


let initialState = {
    dreamsData: [],
    message: ""
};

const dreamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DREAM_DATA:
            for (let i = 0; i < state.dreamsData.length; i++) {
                if (state.dreamsData[i] == action.dataMemory) return { ...state }
            }
            return {
                ...state,
                dreamsData: state.dreamsData.length < 3
                    ? [...state.dreamsData, action.dataMemory]
                    : [...state.dreamsData]
            }
        case RESET_DATA_DREAMS:
            return {
                ...state,
                dreamsData: []
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message
            }
        default:
            return state;
    }
}

export const addDreamsData = (dataMemory) => ({ type: SET_DREAM_DATA, dataMemory });
export const resetDataDreams = () => ({ type: RESET_DATA_DREAMS });
export const setMessage = (message) => ({ type: SET_MESSAGE, message });

export const setGenerationDreamData = (formData) => {
    return async (dispatch) => {
        console.log(formData);
        const arr = formData.map(d => Number(d));
        const req = await DreamsApi.generationDream(arr);
        if (req.resultCode == 0) {
            dispatch(setDreamsProjectionData(req.dreamsMas));
            dispatch(resetDataDreams());
        }
    }
};

export default dreamsReducer;


