import memoryReducer, { arrow, errorAPI, resetGallery, selectMemoryData, setDataGallery, setDataMemory, setSuccessInfo } from "./Memory-reducer";
import expect from "expect";

test("memoriesData should be inserted", ()=> {

    const actionInput = [
        {
            id: 1, date: '04/09/20', type: 'город', src: ['https://sun9-78.userapi.com/impg/UJ1cbLHnaGi_94Dt0cT1D3pTO9gfB4K8FgenHw/dX7tBx9b5eI.jpg?size=1565x1037&quality=96&sign=752345833084585f4b45a1be5ba4d4b2&type=album',
                'https://sun9-16.userapi.com/impg/c853524/v853524362/217c29/x5yQBJXner0.jpg?size=1920x1080&quality=96&sign=2ddde97934284a65f3ce16ec9510509b&type=album',
                'https://sun9-51.userapi.com/impg/wDCAwOsdq5b5Heow2HaW4NNnwWFMFW9TBvbfhQ/YMN3BWQOynI.jpg?size=1440x1078&quality=96&sign=98801d9434c9ca7c1669351852fdd312&type=album'],
            description: "одни из фотографий, сделанных на пленку", memoryLocation: "долговременная память", rating: 5
        },
        {
            id: 5, date: '04/09/20', type: 'город', src: ['https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album'],
            description: "довольные пацаны с курилки", memoryLocation: "долговременная память", rating: 6
        }
    ];

    const action = setDataMemory(actionInput);

    let state = {
        memoriesData: [],
        errorMessage: false
    };

    let newState = memoryReducer(state, action);

    expect(newState.memoriesData.length = actionInput.length).toBeTruthy();
    expect(newState.memoriesData).toEqual(actionInput);
    expect(newState.errorMessage).toBeFalsy();

});

test("errorMessage should be truthy", ()=> {
    let action = errorAPI(true);

    let state = {
        errorMessage: false
    };

    let newState = memoryReducer(state, action);
    expect(newState.errorMessage).toBeTruthy();
});

test("successInfo should be truthy", ()=> {
    let action = setSuccessInfo(true);

    let state = {
        isSuccessInfo: false
    };

    let newState = memoryReducer(state, action);
    expect(newState.isSuccessInfo).toBeTruthy();
});

test("galleryData should be inserted", ()=> {
    const actionInput = ['https://sun9-78.userapi.com/impg/UJ1cbLHnaGi_94Dt0cT1D3pTO9gfB4K8FgenHw/dX7tBx9b5eI.jpg?size=1565x1037&quality=96&sign=752345833084585f4b45a1be5ba4d4b2&type=album',
    'https://sun9-16.userapi.com/impg/c853524/v853524362/217c29/x5yQBJXner0.jpg?size=1920x1080&quality=96&sign=2ddde97934284a65f3ce16ec9510509b&type=album',
    'https://sun9-51.userapi.com/impg/wDCAwOsdq5b5Heow2HaW4NNnwWFMFW9TBvbfhQ/YMN3BWQOynI.jpg?size=1440x1078&quality=96&sign=98801d9434c9ca7c1669351852fdd312&type=album']

    let action = setDataGallery(actionInput);

    let state = {
        dataSrc: [],
        galleryMemoryImage: null
    };

    let newState = memoryReducer(state, action);

    expect(newState.dataSrc.length = actionInput.length).toBeTruthy();
    expect(newState.dataSrc).toEqual(actionInput);
    expect(newState.galleryMemoryImage).toEqual(actionInput[0]);
});

test("galleryImage should be changed right", ()=>{
    const data = ['https://sun9-78.userapi.com/impg/UJ1cbLHnaGi_94Dt0cT1D3pTO9gfB4K8FgenHw/dX7tBx9b5eI.jpg?size=1565x1037&quality=96&sign=752345833084585f4b45a1be5ba4d4b2&type=album',
    'https://sun9-16.userapi.com/impg/c853524/v853524362/217c29/x5yQBJXner0.jpg?size=1920x1080&quality=96&sign=2ddde97934284a65f3ce16ec9510509b&type=album',
    'https://sun9-51.userapi.com/impg/wDCAwOsdq5b5Heow2HaW4NNnwWFMFW9TBvbfhQ/YMN3BWQOynI.jpg?size=1440x1078&quality=96&sign=98801d9434c9ca7c1669351852fdd312&type=album']

    let action = arrow(1)

    let state = {
        dataSrc: data,
        galleryMemoryImage: data[0]
    };

    let newState = memoryReducer(state, action);

    expect(newState.galleryMemoryImage).toEqual(data[1])
});

test("galleryImage should be changed left", ()=>{
        const data = ['https://sun9-78.userapi.com/impg/UJ1cbLHnaGi_94Dt0cT1D3pTO9gfB4K8FgenHw/dX7tBx9b5eI.jpg?size=1565x1037&quality=96&sign=752345833084585f4b45a1be5ba4d4b2&type=album',
    'https://sun9-16.userapi.com/impg/c853524/v853524362/217c29/x5yQBJXner0.jpg?size=1920x1080&quality=96&sign=2ddde97934284a65f3ce16ec9510509b&type=album',
    'https://sun9-51.userapi.com/impg/wDCAwOsdq5b5Heow2HaW4NNnwWFMFW9TBvbfhQ/YMN3BWQOynI.jpg?size=1440x1078&quality=96&sign=98801d9434c9ca7c1669351852fdd312&type=album']

    let action = arrow(0)

    let state = {
        dataSrc: data,
        galleryMemoryImage: data[1]
    };

    let newState = memoryReducer(state, action);
    
    expect(newState.galleryMemoryImage).toEqual(data[0])
});

test("arrow shouldn't be worked", ()=>{
    let actionLeft = arrow(0);
    let actionRight = arrow(1);

    let state = {
        dataSrc: [],
        galleryMemoryImage: null
    };

    let newStateLeft = memoryReducer(state, actionLeft);
    let newStateRight = memoryReducer(state, actionRight);

    expect(newStateLeft.galleryMemoryImage).toBeNull();
    expect(newStateRight.galleryMemoryImage).toBeNull();
});

test("memories State should be reseted", ()=>{
    const dataInput = {
        id: 1, date: '04/09/20', type: 'город', src: ['https://sun9-78.userapi.com/impg/UJ1cbLHnaGi_94Dt0cT1D3pTO9gfB4K8FgenHw/dX7tBx9b5eI.jpg?size=1565x1037&quality=96&sign=752345833084585f4b45a1be5ba4d4b2&type=album',
            'https://sun9-16.userapi.com/impg/c853524/v853524362/217c29/x5yQBJXner0.jpg?size=1920x1080&quality=96&sign=2ddde97934284a65f3ce16ec9510509b&type=album',
            'https://sun9-51.userapi.com/impg/wDCAwOsdq5b5Heow2HaW4NNnwWFMFW9TBvbfhQ/YMN3BWQOynI.jpg?size=1440x1078&quality=96&sign=98801d9434c9ca7c1669351852fdd312&type=album'],
        description: "одни из фотографий, сделанных на пленку", memoryLocation: "долговременная память", rating: 5
    };
    let action = resetGallery();

    let state = {
        galleryMemoryImage: dataInput.src[0],
        dataSrc: dataInput.src,
        memoriesData: [dataInput],
        currentMemory: dataInput,
        errorMessage: true
    };

    let newState = memoryReducer(state, action);

    expect(newState.galleryMemoryImage).toBeNull();
    expect(newState.dataSrc).toBeNull();
    expect(newState.memoriesData).toEqual([]);
    expect(newState.currentMemory).toEqual([]);
    expect(newState.errorMessage).toBeFalsy();
});

test("memoryData should be inserted", ()=>{
    let memoryData = {
        id: 1, date: '04/09/20', type: 'город', src: ['https://sun9-78.userapi.com/impg/UJ1cbLHnaGi_94Dt0cT1D3pTO9gfB4K8FgenHw/dX7tBx9b5eI.jpg?size=1565x1037&quality=96&sign=752345833084585f4b45a1be5ba4d4b2&type=album',
            'https://sun9-16.userapi.com/impg/c853524/v853524362/217c29/x5yQBJXner0.jpg?size=1920x1080&quality=96&sign=2ddde97934284a65f3ce16ec9510509b&type=album',
            'https://sun9-51.userapi.com/impg/wDCAwOsdq5b5Heow2HaW4NNnwWFMFW9TBvbfhQ/YMN3BWQOynI.jpg?size=1440x1078&quality=96&sign=98801d9434c9ca7c1669351852fdd312&type=album'],
        description: "одни из фотографий, сделанных на пленку", memoryLocation: "долговременная память", rating: 5
    };
    let action = selectMemoryData(memoryData);

    let state = {
        currentMemory: []
    };

    let newState = memoryReducer(state, action);

    expect(newState.currentMemory).toEqual(memoryData);
});
