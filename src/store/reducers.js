import SplashReducer from '../screens/Splash/Redux/reducer'
import WeatherReducer from '../screens/Weather/Redux/reducer'
import storage from 'redux-persist/lib/storage'

import { persistCombineReducers } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducers = persistCombineReducers(persistConfig, {
  SplashReducer,
  WeatherReducer,
})

export default rootReducers
