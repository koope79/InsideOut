import expect from "expect";
import dreamsReducer, { addDreamsData, resetDataDreams } from "./Dreams-reducer";

test("selected memory should be added", ()=>{
    const actionInput = {
        id: 1, date: '04/09/20', type: 'город', src: ['https://sun9-78.userapi.com/impg/UJ1cbLHnaGi_94Dt0cT1D3pTO9gfB4K8FgenHw/dX7tBx9b5eI.jpg?size=1565x1037&quality=96&sign=752345833084585f4b45a1be5ba4d4b2&type=album',
            'https://sun9-16.userapi.com/impg/c853524/v853524362/217c29/x5yQBJXner0.jpg?size=1920x1080&quality=96&sign=2ddde97934284a65f3ce16ec9510509b&type=album',
            'https://sun9-51.userapi.com/impg/wDCAwOsdq5b5Heow2HaW4NNnwWFMFW9TBvbfhQ/YMN3BWQOynI.jpg?size=1440x1078&quality=96&sign=98801d9434c9ca7c1669351852fdd312&type=album'],
        description: "одни из фотографий, сделанных на пленку", memoryLocation: "долговременная память", rating: 5
    };

    const action = addDreamsData(actionInput);
    const state = {
        dreamsData: [
            {
                id: 5, date: '04/09/20', type: 'город', src: ['https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album'],
                description: "довольные пацаны с курилки", memoryLocation: "долговременная память", rating: 6
            },
            {
                id: 6, date: '04/09/20', type: 'город', src: ['https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album'],
                description: "пацаны", memoryLocation: "кратковременная память", rating: 10
            },
        ]
    };
    const newState = dreamsReducer(state, action);

    expect(newState.dreamsData.length).toBe(3);
    expect(newState.dreamsData[2]).toEqual(actionInput);

    dreamsReducer(newState,action);
    expect(newState.dreamsData.length).toBe(3);
});

test("dreamsData should be reseted", ()=>{
    const action = resetDataDreams();
    const state = {
        dreamsData: [
            {
                id: 5, date: '04/09/20', type: 'город', src: ['https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album'],
                description: "довольные пацаны с курилки", memoryLocation: "долговременная память", rating: 6
            },
            {
                id: 6, date: '04/09/20', type: 'город', src: ['https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album'],
                description: "пацаны", memoryLocation: "кратковременная память", rating: 10
            },
        ]
    };
    const newState = dreamsReducer(state, action);

    expect(newState.dreamsData.length).toBe(0);
    expect(newState.dreamsData).toEqual([]);
});