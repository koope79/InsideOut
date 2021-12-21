import { ProjectionAPI } from "../api/api";

const SET_ARROW = 'SET_ARROW';
const SET_DATA_MEMORY = 'SET_DATA_MEMORY';
const RESET_GALLERY = 'RESET_GALLERY_IMAGE';
const SET_DATA_GALLERY = 'SET_DATA_GALLERY';
const SELECT_MEMORY_DATA = 'SELECT_MEMORY_DATA';

const API_ERROR = 'API_ERROR';
const IS_SUCCESS_INFO = 'IS_SUCCESS_INFO';


let initialState = {
    memoriesData: [],
    currentMemory: [],
    dataSrc: [],
    galleryMemoryImage: null,

    errorMessage: false,
    isSuccessInfo: false
};

const memoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARROW:
            if (state.galleryMemoryImage) {
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
            }
            return { ...state, galleryMemoryImage: null }

        case SET_DATA_MEMORY:
            return {
                ...state,
                memoriesData: [...action.data],
                errorMessage: false
            }
        case SET_DATA_GALLERY:
            return {
                ...state,
                dataSrc: [...action.dataSrc],
                galleryMemoryImage: action.dataSrc[0]
            }
        case RESET_GALLERY:
            return {
                ...state,
                galleryMemoryImage: null,
                dataSrc: null,
                memoriesData: [],
                currentMemory: [],
                errorMessage: false,
                isSuccessInfo: false
            }
        case SELECT_MEMORY_DATA:
            return {
                ...state,
                currentMemory: action.dataMemory
            }
        case API_ERROR:
            return {
                ...state,
                errorMessage: action.flag
            }
        case IS_SUCCESS_INFO:
            return {
                ...state,
                isSuccessInfo: action.flag
            }
        default:
            return state;
    }
}

export const arrow = (flag) => ({ type: SET_ARROW, flag });
export const setDataMemory = (data) => ({ type: SET_DATA_MEMORY, data });
export const setDataGallery = (dataSrc) => ({ type: SET_DATA_GALLERY, dataSrc });
export const resetGallery = () => ({ type: RESET_GALLERY });
export const selectMemoryData = (dataMemory) => ({ type: SELECT_MEMORY_DATA, dataMemory });

export const errorAPI = (flag) => ({ type: API_ERROR, flag });
export const setSuccessInfo = (flag) => ({ type: IS_SUCCESS_INFO, flag });

export const setDataMemoryTh = (toolFormData) => {
    return async (dispatch) => {
        try {
            const data = await ProjectionAPI.getMemoryData(toolFormData);
            if (data && data.length > 0) { dispatch(setDataMemory(data)); }
            else { dispatch(errorAPI(true)); }
        }
        catch {
            dispatch(errorAPI(true));
        }
    }
}

export const saveMemory = (memoriesFiles, saveFormData) => {
    return async (dispatch) => {
        let putMemoriesRequest; // return ids []
        // saveFormData.images = putMemoriesRequest.imagesID
        let postSaveMemoryRequest;
    }
}

export const saveMemoryTh = (saveFormData, urlArr) => {
    return async (dispatch) => {
        try {
            console.log(saveFormData);
            saveFormData.src = urlArr;
            const req = await ProjectionAPI.saveMemory(saveFormData);
            if (req.resultCode == 0) dispatch(resetGallery());
            else { dispatch(errorAPI(true)); }
        }
        catch {
            dispatch(errorAPI(true));
        }
    }
}

export const selectionMemoriesSort = (sortFormData) => {
    return async (dispatch) => {
        try {
            const data = await ProjectionAPI.getSortMemoriesData(sortFormData);   // return массив с объектами воспоминаний 
            if (data && data.length > 0) { dispatch(setDataMemory(data)); }     // сет данных для отображения в таблице сортировки
            else { dispatch(errorAPI(true)); }
        }
        catch {
            dispatch(errorAPI(true));
        }
    }
}

export const transportMemory = (memory, location) => {
    return async (dispatch) => {
        try {
            const obj = { id: memory.id, location }
            const req = await ProjectionAPI.transportMemoryData(obj);
            if (req.resultCode == 0) dispatch(setSuccessInfo(true));
            else{dispatch(errorAPI(true));}
        }
        catch {
            dispatch(errorAPI(true));
        }
    }
}


export default memoryReducer;


