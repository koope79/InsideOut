import { ProjectionAPI } from "../api/api";

const SET_ARROW = 'SET_ARROW';
const SET_DATA_MEMORY = 'SET_DATA_MEMORY';
const RESET_GALLERY = 'RESET_GALLERY_IMAGE';
const SET_DATA_GALLERY = 'SET_DATA_GALLERY';
const SELECT_MEMORY_DATA = 'SELECT_MEMORY_DATA';


let initialState = {
    memoriesData: [],
    currentMemory: [],
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
                memoriesData: [...action.data]
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
                memoriesData: [],
                currentMemory: []
            }
        case SELECT_MEMORY_DATA:
            return{
                ...state,
                currentMemory: action.dataMemory
            }
        default:
            return state;
    }
}

export const arrow = (flag) => ({ type: SET_ARROW, flag });
const setDataMemory = (data) => ({ type: SET_DATA_MEMORY, data });
export const setDataGallery = (dataSrc) => ({ type: SET_DATA_GALLERY, dataSrc });
export const resetGallery = () => ({type: RESET_GALLERY});
export const selectMemoryData = (dataMemory) => ({type: SELECT_MEMORY_DATA, dataMemory});

export const setDataMemoryTh = (toolFormData) => {
    return async (dispatch) => {
        try {
            const data = await ProjectionAPI.getMemoryData(toolFormData);
            dispatch(setDataMemory(data));
            //dispatch(setDataGallery(data[0].src));
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

export const selectionMemoriesSort = (sortFormData) => {
    return (dispatch) => {
        const data = ProjectionAPI.getSortMemoriesData(sortFormData);   // return массив с объектами воспоминаний 
        //dispatch(setDataMemory(data));    // сет данных для отображения в таблице сортировки
    }
}

export const transportMemory = (memory) => {
    return (dispatch) => {
        const data = ProjectionAPI.transportMemoryData(memory);   // return массив с объектами воспоминаний 
        //dispatch(setDataMemory(data));    // сет данных для отображения в таблице сортировки
    }
}


export default memoryReducer;


