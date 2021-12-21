import projectionReducer, { dreamsProjection, setProjectionMemory } from './Projection-reducer';
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
