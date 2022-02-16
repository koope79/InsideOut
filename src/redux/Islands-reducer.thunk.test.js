import expect from "expect";
import { IslandsApi } from "../api/api";
import { getIslandsPersonality, getListTypesMemories, pickTypeMemory, setIslandsPers, setListTypes } from "./Islands-reducer";
import { errorAPI } from "./Memory-reducer";


jest.mock("../api/api");
const islandsApiMock = IslandsApi;

test("received islands data should be added in state", async ()=>{
    const resultAPI = {
        resultCode: 0,
        message:[""],
        data: ["Дом", "Семья", "Работа", "Авто", "Друзья"]
    };

    islandsApiMock.getIslands.mockReturnValue(Promise.resolve(resultAPI));

    const thunk = getIslandsPersonality();
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setIslandsPers(resultAPI.data));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, errorAPI(false));
});

test("received listTypes should be added in state", async ()=>{
    const resultAPI = {
        resultCode: 0,
        message:[""],
        data: [
            {"Плавание": 123},
            {"Книги": 2},
            {"Музыка": 11},
            {"Готовка": 15},
            {"Фото": 5}
        ]
    };

    islandsApiMock.getListTypes.mockReturnValue(Promise.resolve(resultAPI));

    const thunk = getListTypesMemories();
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setListTypes(resultAPI.data));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, errorAPI(false));
});

test("selected type of memory should be upload", async ()=>{
    const resultAPI = {
        resultCode: 0,
        message:[""],
    };
    const thunkInput = "Собака";

    islandsApiMock.pickTypeMemory.mockReturnValue(Promise.resolve(resultAPI));

    const thunk = pickTypeMemory(thunkInput);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
    //expect(dispatchMock).toHaveBeenNthCalledWith(1, getListTypesMemories());
});