import expect from "expect";
import { FearsApi } from "../api/api";
import { countFears, getFearsData, setCountFears, setDataFears } from "./Fears-reducer";

jest.mock("../api/api");
const fearsApiMock = FearsApi;

test("received search fearData should be inserted in state", async () => {
    const resultAPI = {
        items: [
            {
                id: 2, date: '23/05/14', type: 'сопка', src: ['https://sun9-21.userapi.com/impf/cYNA2bhg4WHE023w1WVpXiqs_bjYVFsQGQ_HDQ/cRNZPfMrMvo.jpg?size=2048x2048&quality=96&sign=95e317d86bbf8aacc0690e6f33e70fbf&type=album'],
                description: "", memoryLocation: "", rating: 1
            },
        ],
        totalCount: 1
    };

    const thunkInput = { date: "01/02/21", type: "полиция" };

    fearsApiMock.getFearData.mockReturnValue(Promise.resolve(resultAPI));

    const thunk = getFearsData(thunkInput);
    const dispatchMock = jest.fn();
    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
    //expect(dispatchMock).toHaveBeenNthCalledWith(1, setDataFears(resultAPI.items));
});

test("count of fears should be uploaded", async ()=>{
    const resultAPI = {
        countInLongData: 10,
        countReleaseFears: 5
    };

    fearsApiMock.countFears.mockReturnValue(Promise.resolve(resultAPI));

    const thunk = countFears();
    const dispatchMock = jest.fn();
    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setCountFears(resultAPI.countInLongData, resultAPI.countReleaseFears));
});

// test saveFearForm