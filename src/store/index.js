import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

// import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers'
import rootSaga from './saga'

let composeEnhancers = compose

if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  /* eslint-disable no-underscore-dangle */
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
}

const middleware = []
const sagaMiddleware = createSagaMiddleware()

middleware.push(sagaMiddleware)

// const persistedReducer = persistCombineReducers(config, rootReducer);

// if (__DEV__) {
//     middleware.push(createLogger());
// }

const enhancers = [
  applyMiddleware(...middleware /* more middlewares if any goes here */),
]

// const store = createStore(reducers1, undefined, composeEnhancers(...enhancers))
const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(...enhancers)
)
const persistor = persistStore(store)
// const persistor = persistStore(store, config, () => {
//     console.log('Test', store.getState());
// });

const configureStore = () => {
  return { persistor, store }
}

sagaMiddleware.run(rootSaga)

// export default store
export default configureStore
