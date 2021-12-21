import { IslandsApi } from "../api/api";

const SET_ISLANDS_PERS = 'SET_ISLANDS_PERS';


let initialState = {
    islandsPersonality: ["Дом", "Семья", "Работа", "Авто", "Друзья"],
    listTypes: [
        {"Плавание": 123},
        {"Книги": 2},
        {"Музыка": 11},
        {"Готовка": 15},
        {"Фото": 5}
    ],
};

const islandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ISLANDS_PERS:
            return{
                ...state,
                islandsPersonality: action.data
            }
        default:
            return state;
    }
}

export const setIslandsPers = (data) => ({type: SET_ISLANDS_PERS, data})

export const getIslandsPersonality = () => {
    return async (dispatch) => {
        try{
            const data = await IslandsApi.getIslands();
            if(data && data.length > 0)dispatch(setIslandsPers(data));
        }
        catch{alert('error');}
    }
}

export const getListTypesMemories = () => {
    return (dispatch) => {
        try{
            const data = IslandsApi.getListTypes();
        }
        catch{alert('error');}
    }
}

export const pickTypeMemory = (type) => {
    return (dispatch) => {
        try{
            const data = IslandsApi.pickTypeMemory(type);
        }
        catch{alert('error');}
    }
}

export default islandsReducer;


