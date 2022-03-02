import { setMessage } from "./Dreams-reducer";

const SET_PROJECTION_MEMORY = 'SET_PROJECTION_MEMORY';
const DREAMS_PROJECTION = 'DREAMS_PROJECTION';
const SET_DREAM_DATA = 'SET_DREAM_DATA';
const RESET_DREAMS_DATA = 'RESET_DREAMS_DATA';


let initialState = {
    projectionMemoryImage: 'https://sun9-25.userapi.com/impg/yoJma_4-vnV91Ub9MIFXxLEp8aSkIbeLg5ANMw/jZHt185w9QY.jpg?size=1424x1012&quality=96&sign=2d3c933f162a8b152cce88836a6fe651&type=album',
    dreamsProjectionData: []
};

const projectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTION_MEMORY:
            return {
                ...state,
                projectionMemoryImage: action.galleryImage
            }
        case SET_DREAM_DATA:
            return {
                ...state,
                dreamsProjectionData: action.dreamsData
            }
        case RESET_DREAMS_DATA:
            return{
                ...state,
                dreamsProjectionData: []
            }
        default:
            return state;
    }
}


export const setProjectionMemory = (galleryImage) => ({ type: SET_PROJECTION_MEMORY, galleryImage });
export const setDreamsProjectionData = (dreamsData) => ({type: SET_DREAM_DATA, dreamsData});
export const resetDreamsData = () => ({type: RESET_DREAMS_DATA})

export const thDreams = (dreamsData) => {
    return (dispatch) => {
        dispatch(setMessage("Проецируются воспоминания"));
        let i = 0;
        let timerId = setTimeout(function tick() {
            dispatch(setProjectionMemory(dreamsData[i]));
            i += 1;
            if (i == dreamsData.length) return;
            timerId = setTimeout(tick, 3000);
        }, 3000);
        dispatch(resetDreamsData());
    }
}

export default projectionReducer;


