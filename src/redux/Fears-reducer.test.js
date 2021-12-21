import expect from "expect";
import fearsReducer, { resetFearData, selectFearData, setCountFears, setDataFears, setErrorMessage } from "./Fears-reducer";

test("fearsData should be inserted in state", ()=>{

    const inputData = [
        {
            id: 1, date: '01/02/21', type: 'полиция', src: ['https://www.hrw.org/sites/default/files/styles/embed_small/public/multimedia_images_2017/201707eca_riot_police_3.jpg?itok=r3lAe0uC'],
            description: "жестокие задержания мирных граждан"
        },
        {
            id: 2, date: '02/03/20', type: 'падение', src: ['https://www.hrw.org/sites/default/files/styles/embed_small/public/multimedia_images_2017/201707eca_riot_police_3.jpg?itok=r3lAe0uC'],
            description: "боязнь высоты"
        }
    ];

    const action = setDataFears(inputData);
    const state = {
        fearsData: []
    }
    
    const newState = fearsReducer(state, action);

    expect(newState.fearsData.length = inputData.length).toBeTruthy();
    expect(newState.fearsData).toEqual(inputData);
});

test("fearData selected", ()=> {
    const inputData = 
    {
        id: 1, date: '01/02/21', type: 'полиция', src: ['https://www.hrw.org/sites/default/files/styles/embed_small/public/multimedia_images_2017/201707eca_riot_police_3.jpg?itok=r3lAe0uC'],
        description: "жестокие задержания мирных граждан"
    };

    const action = selectFearData(inputData);
    const state = {
        currentFear: []
    };
    const newState = fearsReducer(state, action);

    expect(newState.currentFear).toEqual(inputData);
});

test("data of fearReducer should be reseted", ()=>{
    const action = resetFearData();
    const state = {
        fearsData: [
            {
                id: 1, date: '01/02/21', type: 'полиция', src: ['https://www.hrw.org/sites/default/files/styles/embed_small/public/multimedia_images_2017/201707eca_riot_police_3.jpg?itok=r3lAe0uC'],
                description: "жестокие задержания мирных граждан"
            },
            {
                id: 2, date: '02/03/20', type: 'падение', src: ['https://www.hrw.org/sites/default/files/styles/embed_small/public/multimedia_images_2017/201707eca_riot_police_3.jpg?itok=r3lAe0uC'],
                description: "боязнь высоты"
            }
        ],
        currentFear: {
            id: 1, date: '01/02/21', type: 'полиция', src: ['https://www.hrw.org/sites/default/files/styles/embed_small/public/multimedia_images_2017/201707eca_riot_police_3.jpg?itok=r3lAe0uC'],
            description: "жестокие задержания мирных граждан"
        },
        countFears: 120
    };

    const newState = fearsReducer(state, action);

    expect(newState.fearsData).toEqual([]);
    expect(newState.currentFear).toEqual([]);
    expect(newState.countFears).toBeNull();
});

test("text of errorMessage should be inserted", ()=>{
    const inputData = "Ошибка";
    const action = setErrorMessage(inputData);
    const state = {
        errorMessage: ""
    };

    const newState = fearsReducer(state, action);

    expect(newState.errorMessage).toBe(inputData);
    expect(newState.errorMessage).toHaveLength(inputData.length);
});

test("count of fears should be inserted", ()=> {
    const action = setCountFears(10, 5);
    const state = {
        countFears: null,
        countReleaseFears: null
    };
    const newState = fearsReducer(state, action);

    expect(newState.countFears).toEqual(10);
    expect(newState.countReleaseFears).toEqual(5);
});