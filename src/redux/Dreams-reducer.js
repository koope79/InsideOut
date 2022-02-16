import { DreamsApi } from "../api/api";

const SET_DREAM_DATA = 'SET_FEAR_DATA';
const RESET_DATA_DREAMS = 'RESET_DATA_DREAMS';


let initialState = {
    dreamsData: [],
};

const dreamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DREAM_DATA:
            for(let i = 0; i < state.dreamsData.length; i++){
                if(state.dreamsData[i] == action.dataMemory) return{...state}
            }
            return{
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
        default:
            return state;
    }
}

export const addDreamsData = (dataMemory) => ({type: SET_DREAM_DATA, dataMemory});
export const resetDataDreams = () => ({type: RESET_DATA_DREAMS});

export const setGenerationDreamData = (formData) => {
    return async (dispatch) => {
        const arr = formData.map(d => Number(d));
        const req = await DreamsApi.generationDream(arr);
        // диспатч массива от req в projection-reducer (dreamsProjection)   сделать тест
        dispatch(resetDataDreams());
    }
};

export default dreamsReducer;


