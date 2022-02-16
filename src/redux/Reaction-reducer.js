import { ReactionApi } from "../api/api";

const _ = '_';


let initialState = {
    reactionData: [
        {
            id: 1,
            reaction: "Ударить",
            src: ['https://i.ytimg.com/vi/YTb43iAarsE/hqdefault.jpg', 'https://tavan-en.ru/wp-content/uploads/udarit-po-licu-vo-sne.jpg']
        },
        {
            id: 2,
            reaction: "Убежать",
            src: ['https://i.ytimg.com/vi/YTb43iAarsE/hqdefault.jpg']
        },
        {
            id: 3,
            reaction: "Погулять",
            src: ['https://i.ytimg.com/vi/YTb43iAarsE/hqdefault.jpg']
        },
        {
            id: 4,
            reaction: "Получить",
            src: ['https://i.ytimg.com/vi/YTb43iAarsE/hqdefault.jpg']
        },
    ]
};

const reactionReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const setReactionData = () => {
    return (dispatch) => {
        try{
            const data = ReactionApi.getReactionData();
        }
        catch{
            alert('error');
        }
    }
}

export const applyReaction = () => {
    return (dispatch) => {
        try{
            const req = ReactionApi.getReactionData();
        }
        catch{
            alert('error');
        }
    }
}

export default reactionReducer;

// тесты Reaction
