import expect from "expect";
import islandsReducer, { setIslandsPers, setListTypes } from "./Islands-reducer";

test("islandsData should be addded in state", ()=>{
    const actionInput = [ "Дом", "Семья", "Работа", "Авто", "Учёба" ];
    const action = setIslandsPers(actionInput);

    const state = {
        islandsPersonality: []
    }

    const newState = islandsReducer(state, action);

    expect(newState.islandsPersonality).toEqual(actionInput);
    expect(newState.islandsPersonality.length == actionInput.length).toBeTruthy();
});

test("listTypesData should be addded in state", ()=>{
    const actionInput = [
        {"Плавание": 123},
        {"Книги": 2},
        {"Музыка": 11},
        {"Готовка": 15},
        {"Фото": 5}
    ];
    const action = setListTypes(actionInput);

    const state = {
        listTypes: []
    }

    const newState = islandsReducer(state, action);

    expect(newState.listTypes).toEqual(actionInput);
    expect(newState.listTypes.length == actionInput.length).toBeTruthy();
});



