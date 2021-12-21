const SET_PROJECTION_MEMORY = 'SET_PROJECTION_MEMORY';
const DREAMS_PROJECTION = 'DREAMS_PROJECTION';


let initialState = {
    projectionMemoryImage: 'https://sun9-25.userapi.com/impg/yoJma_4-vnV91Ub9MIFXxLEp8aSkIbeLg5ANMw/jZHt185w9QY.jpg?size=1424x1012&quality=96&sign=2d3c933f162a8b152cce88836a6fe651&type=album',
    dreamsProjectionData: ['https://www.hrw.org/sites/default/files/styles/embed_small/public/multimedia_images_2017/201707eca_riot_police_3.jpg?itok=r3lAe0uC', 'https://sun9-25.userapi.com/impg/yoJma_4-vnV91Ub9MIFXxLEp8aSkIbeLg5ANMw/jZHt185w9QY.jpg?size=1424x1012&quality=96&sign=2d3c933f162a8b152cce88836a6fe651&type=album', 'https://sun9-82.userapi.com/impf/c624428/v624428043/512d7/GOsZRak39EE.jpg?size=960x960&quality=96&sign=803d9f68c183125489d004185d44a057&type=album']
};

const projectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTION_MEMORY:
            return {
                ...state,
                projectionMemoryImage: action.galleryImage
            }
        default:
            return state;
    }
}


export const setProjectionMemory = (galleryImage) => ({ type: SET_PROJECTION_MEMORY, galleryImage });

export const thDreams = (dreamsData) => {
    return (dispatch) => {
        let i = 0;
        let timerId = setTimeout(function tick() {
            dispatch(setProjectionMemory(dreamsData[i]));
            i += 1;
            if (i == dreamsData.length) return;
            timerId = setTimeout(tick, 3000);
        }, 3000);
    }
}

export default projectionReducer;


