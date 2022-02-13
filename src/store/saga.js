import { all, takeLatest } from 'redux-saga/effects'

import {
  QR_REQUEST_SAGA,
  SPLASH_SAGA,
  StatusSagas,
} from '../screens/Splash/Redux'
import { GET_WEATHER } from '../screens/Weather/Redux/reducer'
import {
  getWeatherDataSaga} from '../screens/Weather/Redux/saga'

export default function* rootSaga() {
  yield all([...StatusSagas])

  yield all([...SPLASH_SAGA])

  yield all([...QR_REQUEST_SAGA])

  yield takeLatest(GET_WEATHER, getWeatherDataSaga)
}
