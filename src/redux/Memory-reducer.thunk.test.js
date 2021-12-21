import expect from "expect";
import { ProjectionAPI } from "../api/api";
import { selectionMemoriesSort, setDataMemory, setDataMemoryTh, setSuccessInfo, transportMemory } from "./Memory-reducer";

jest.mock("../api/api");
const projectionApiMock = ProjectionAPI;


test("received data should be set in state for Search", async () => {
    const resultAPI = [
        {
            id: 2, date: '23/05/14', type: 'сопка', src: ['https://sun9-21.userapi.com/impf/cYNA2bhg4WHE023w1WVpXiqs_bjYVFsQGQ_HDQ/cRNZPfMrMvo.jpg?size=2048x2048&quality=96&sign=95e317d86bbf8aacc0690e6f33e70fbf&type=album'],
            description: "", memoryLocation: "", rating: 1
        },
    ];

    const thunkInput = { dateMemory: "23/05/14", typeMemory: "сопка" };

    projectionApiMock.getMemoryData.mockReturnValue(Promise.resolve(resultAPI));

    const thunk = setDataMemoryTh(thunkInput);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setDataMemory(resultAPI));
});
/////////
test("memories should be successfully loaded ", () => {
    const resultAPI = {
        resultCode: 0,
        message: [""]
    };
    const thunkInput = {};
    projectionApiMock.saveMemory.mockReturnValue(Promise.resolve(resultAPI));


});
/////////

test("received data should be set in state for SortComponent ", async () => {
    const resultAPI = [
        {
            id: 1, date: '04/09/20', type: 'город', src: ['https://sun9-78.userapi.com/impg/UJ1cbLHnaGi_94Dt0cT1D3pTO9gfB4K8FgenHw/dX7tBx9b5eI.jpg?size=1565x1037&quality=96&sign=752345833084585f4b45a1be5ba4d4b2&type=album',
                'https://sun9-16.userapi.com/impg/c853524/v853524362/217c29/x5yQBJXner0.jpg?size=1920x1080&quality=96&sign=2ddde97934284a65f3ce16ec9510509b&type=album',
                'https://sun9-51.userapi.com/impg/wDCAwOsdq5b5Heow2HaW4NNnwWFMFW9TBvbfhQ/YMN3BWQOynI.jpg?size=1440x1078&quality=96&sign=98801d9434c9ca7c1669351852fdd312&type=album'],
            description: "одни из фотографий, сделанных на пленку", memoryLocation: "долговременная память", rating: 5
        },
        {
            id: 5, date: '04/09/20', type: 'город', src: ['https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album'],
            description: "довольные пацаны с курилки", memoryLocation: "долговременная память", rating: 6
        },
        {
            id: 6, date: '04/09/20', type: 'город', src: ['https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album'],
            description: "пацаны", memoryLocation: "кратковременная память", rating: 10
        }
    ];

    const thunkInput = {
        dateFrom: "11/11/12", dateTo: "12/12/21", ratingFrom: "3", ratingTo: "10", type: "город"
    };

    projectionApiMock.getSortMemoriesData.mockReturnValue(Promise.resolve(resultAPI));

    const thunk = selectionMemoriesSort(thunkInput);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setDataMemory(resultAPI));
})

test("memory should be transport", async ()=>{
    const resultAPI = {
        resultCode: 0,
        message: [""]
    };
    const thunkInputMemory = {
        id: 2, date: '23/05/14', type: 'сопка', src: ['https://sun9-21.userapi.com/impf/cYNA2bhg4WHE023w1WVpXiqs_bjYVFsQGQ_HDQ/cRNZPfMrMvo.jpg?size=2048x2048&quality=96&sign=95e317d86bbf8aacc0690e6f33e70fbf&type=album'],
        description: "", memoryLocation: "долговременная память", rating: 1
    };
    const thunkInputLocation = "кратковременная память";

    projectionApiMock.transportMemoryData.mockReturnValue(Promise.resolve(resultAPI));

    const thunk = transportMemory(thunkInputMemory, thunkInputLocation);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(1);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setSuccessInfo(true));
    
})