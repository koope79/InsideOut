import { ProjectionAPI } from "../api/api";
import { setMemoryData } from "./Memories-reducer";

const SET_PROJECTION_MEMORY = 'SET_PROJECTION_MEMORY';


let initialState = {
    dataSrc: [],
    galleryMemoryImage: null,
    projectionMemoryImage: 'https://sun9-25.userapi.com/impg/yoJma_4-vnV91Ub9MIFXxLEp8aSkIbeLg5ANMw/jZHt185w9QY.jpg?size=1424x1012&quality=96&sign=2d3c933f162a8b152cce88836a6fe651&type=album',
};

const projectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTION_MEMORY:
            return {
                ...state,
                projectionMemoryImage: action.galleryImage
            }

        default:
            return state;
    }
}


export const setProjectionMemory = (galleryImage) => ({ type: SET_PROJECTION_MEMORY, galleryImage });


export default projectionReducer;


