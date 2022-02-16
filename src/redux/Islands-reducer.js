import { IslandsApi } from "../api/api";
import { errorAPI } from "./Memory-reducer";

const SET_ISLANDS_PERS = 'SET_ISLANDS_PERS';
const SET_LIST_TYPES = 'SET_LIST_TYPES';


let initialState = {
    islandsPersonality: [],
    listTypes: [],
};

const islandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ISLANDS_PERS:
            return{
                ...state,
                islandsPersonality: action.data
            }
        case SET_LIST_TYPES:
            return{
                ...state,
                listTypes: action.listData
            }
        default:
            return state;
    }
}

export const setIslandsPers = (data) => ({type: SET_ISLANDS_PERS, data});
export const setListTypes  = (listData) => ({type: SET_LIST_TYPES, listData});

export const getIslandsPersonality = () => {
    return async (dispatch) => {
        try{
            const data = await IslandsApi.getIslands();
            if(data && data.data.length > 0){
                dispatch(setIslandsPers(data.data));
                dispatch(errorAPI(false));
            }
            else { dispatch(errorAPI(true)); }
        }
        catch {
            dispatch(errorAPI(true));
        }
    }
}

export const getListTypesMemories = () => {
    return async (dispatch) => {
        try{
            const data = await IslandsApi.getListTypes();
            if(data && data.data.length > 0){
                dispatch(setListTypes(data.data));
                dispatch(errorAPI(false));
            }
            else { dispatch(errorAPI(true)); }
        }
        catch {
            dispatch(errorAPI(true));
        }
    }
}

export const pickTypeMemory = (type) => {
    return async (dispatch) => {
        try{
            const req = await IslandsApi.pickTypeMemory(type);
            if(req.resultCode == 0) { dispatch(getListTypesMemories()); }
        }
        catch{dispatch(errorAPI(true));}
    }
}

export default islandsReducer;


