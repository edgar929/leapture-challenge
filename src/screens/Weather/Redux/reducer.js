import * as types from './types';

const initialState = {
    weather: {},
};
export const GET_WEATHER = 'GET_WEATHER';
const SET_WEATHER = 'SET_WEATHER';

export const getWeather=()=>{
    return {
        type: GET_WEATHER,
    };
}
export const setWeather=(data)=>{
    return {
        type: SET_WEATHER,
        weather: data,
    };
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weather: action,
            };
     
        default:
            return state;
    }
}
