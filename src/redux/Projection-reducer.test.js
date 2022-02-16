import projectionReducer, { setProjectionMemory, thDreams } from './Projection-reducer';
import expect from "expect";

test('image should be inserted', () => {
    let inputData = "https://sun9-83.userapi.com/impg/2htMZjvi_d6O3qh9NoJ7-Z50foW_httgcJ9Fbw/W4pYDo57Tuo.jpg?size=1080x1080&quality=96&sign=9679aa4aa58406be420268d6f6234f6f&type=album";
    let action = setProjectionMemory(inputData);

    let state = {
        projectionMemoryImage: null
    }

    let newState = projectionReducer(state, action);
    expect(newState.projectionMemoryImage).toBe(inputData);
  });


test("thDreams thunk test", ()=>{
    jest.useFakeTimers();
    const inputData = ['https://www.hrw.org/sites/default/files/styles/embed_small/public/multimedia_images_2017/201707eca_riot_police_3.jpg?itok=r3lAe0uC', 'https://sun9-25.userapi.com/impg/yoJma_4-vnV91Ub9MIFXxLEp8aSkIbeLg5ANMw/jZHt185w9QY.jpg?size=1424x1012&quality=96&sign=2d3c933f162a8b152cce88836a6fe651&type=album', 'https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album'];

    const thunk = thDreams(inputData);
    const dispatchMock = jest.fn();
    thunk(dispatchMock);

    expect(dispatchMock).not.toBeCalled();
    jest.runAllTimers();
    expect(dispatchMock).toHaveBeenCalledTimes(inputData.length);
});
