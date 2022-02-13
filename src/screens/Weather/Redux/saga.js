import { call, put } from "redux-saga/effects";
import { getWeatherData } from "./action";
import { setWeather } from "./reducer";

export function* getWeatherDataSaga(action) {
    try {
        const response = yield call(getWeatherData);
        yield put(setWeather(response.data));
    } catch (error) {
        console.log(error);
    }
}
