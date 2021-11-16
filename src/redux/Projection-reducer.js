import { ProjectionAPI } from "../api/api";

const SET_PROJECTION_MEMORY = 'SET_PROJECTION_MEMORY';
const SET_ARROW = 'SET_ARROW';
const SET_DATA_SRC = 'SET_DATA_SRC';


let initialState = {
    dataSrc: [],
    galleryMemoryImage: null,
    projectionMemoryImage: 'https://sun9-25.userapi.com/impg/yoJma_4-vnV91Ub9MIFXxLEp8aSkIbeLg5ANMw/jZHt185w9QY.jpg?size=1424x1012&quality=96&sign=2d3c933f162a8b152cce88836a6fe651&type=album',
};

const projectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARROW:
            let ind = state.dataSrc.findIndex(src => src == state.galleryMemoryImage);
            if (action.flag) {
                if (ind >= 0) ind += 1;
                if (ind == state.dataSrc.length) ind = 0;
            }
            else {
                if (ind == 0) ind = state.dataSrc.length;
                if (ind > 0) ind -= 1;
            }

            return {
                ...state,
                galleryMemoryImage: state.dataSrc[ind]
            }
        case SET_PROJECTION_MEMORY:
            return {
                ...state,
                projectionMemoryImage: state.galleryMemoryImage,
                galleryMemoryImage: null
            }
        case SET_DATA_SRC:
            return {
                ...state,
                dataSrc: [...action.data],
                galleryMemoryImage: action.data[0]
            }
        default:
            return state;
    }
}

export const arrow = (flag) => ({ type: SET_ARROW, flag });
export const setProjectionMemory = () => ({ type: SET_PROJECTION_MEMORY });
const setDataSrc = (data) => ({ type: SET_DATA_SRC, data })


export const setSrcData = (formData) => {
    return async (dispatch) => {
        try {
            const response = await ProjectionAPI.getDataSrc(formData);
            dispatch(setDataSrc(response));
        }
        catch {
            alert('no Memories');
        }
    }
}


export default projectionReducer;


