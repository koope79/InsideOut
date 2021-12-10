import { IslandsApi } from "../api/api";

const _ = '_';


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
        default:
            return state;
    }
}

export const getIslandsPersonality = () => {
    return (dispatch) => {
        try{
            const data = IslandsApi.getIslands();
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


