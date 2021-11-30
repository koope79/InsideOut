import { ProjectionAPI } from "../api/api";

const SET_ARROW = 'SET_ARROW';
const SET_DATA_MEMORY = 'SET_DATA_MEMORY';
const RESET_GALLERY = 'RESET_GALLERY_IMAGE';
const SET_DATA_GALLERY = 'SET_DATA_GALLERY';


let initialState = {
    memoryData: [],
    dataSrc: [],
    galleryMemoryImage: null
};

const memoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARROW:
            let ind = state.dataSrc.findIndex(src => src === state.galleryMemoryImage);
            if (action.flag) {
                if (ind >= 0) ind += 1;
                if (ind === state.dataSrc.length) ind = 0;
            }
            else {
                if (ind === 0) ind = state.dataSrc.length;
                if (ind > 0) ind -= 1;
            }

            return {
                ...state,
                galleryMemoryImage: state.dataSrc[ind]
            }
        case SET_DATA_MEMORY:
            return {
                ...state,
                memoryData: {...action.data}
            }
        case SET_DATA_GALLERY:
            return{
                ...state,
                dataSrc: [...action.dataSrc],
                galleryMemoryImage: action.dataSrc[0]
            }
        case RESET_GALLERY:
            return{
                ...state,
                galleryMemoryImage: null,
                dataSrc: null,
                memoryData: null
            }
        default:
            return state;
    }
}

export const arrow = (flag) => ({ type: SET_ARROW, flag });
const setDataMemory = (data) => ({ type: SET_DATA_MEMORY, data });
export const setDataGallery = (dataSrc) => ({ type: SET_DATA_GALLERY, dataSrc });
export const resetGallery = () => ({type: RESET_GALLERY});    


export const setDataMemoryTh = (toolFormData) => {
    return async (dispatch) => {
        try {
            const data = await ProjectionAPI.getMemoryData(toolFormData);
            dispatch(setDataMemory(data));
            dispatch(setDataGallery(data.src));
        }
        catch {
            alert('no Memories');
        }
    }
}

export const saveMemoryTh = (saveFormData, urlArr) => {
    return async (dispatch) => {
        try {
            saveFormData.src = urlArr;
            const req = await ProjectionAPI.saveMemory(saveFormData);
            dispatch(resetGallery());
            //dispatch(setDataMemory(data.src));
        }
        catch {
            alert('error');
        }
    }
}


export default memoryReducer;


