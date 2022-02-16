import expect from "expect";
import { DreamsApi } from "../api/api";
import { setGenerationDreamData } from "./Dreams-reducer";

jest.mock("../api/api");
const dreamsApiMock = DreamsApi;

// тест setGenerationDreamData

test("", async ()=>{
    const resultApi = {
        resultCode: 0,
        message: [""],
        dreamsData: ['https://www.hrw.org/sites/default/files/styles/embed_small/public/multimedia_images_2017/201707eca_riot_police_3.jpg?itok=r3lAe0uC', 'https://sun9-25.userapi.com/impg/yoJma_4-vnV91Ub9MIFXxLEp8aSkIbeLg5ANMw/jZHt185w9QY.jpg?size=1424x1012&quality=96&sign=2d3c933f162a8b152cce88836a6fe651&type=album', 'https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album']
    };

    const thunkInput = ["1", "5"];

    dreamsApiMock.generationDream.mockReturnValue(Promise.resolve(resultApi));

    const thunk = setGenerationDreamData(thunkInput);
    const dispatchMock = jest.fn();

    await thunk(dispatchMock);

    // добавить action для диспатча

});