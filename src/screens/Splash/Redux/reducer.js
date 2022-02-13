import produce from 'immer'
import * as types from './type'

export const initialState = {
  Loader: false,
  LoginResponse: null,
  LoginWithoutParamResponse: null,
  lat: '',
  long: '',
  random_number: '',

  Status: {
    StatusResponse: null,
    StatusResponse2: null,
  },

  token: {
    ApiToken: null,
    ProfileToken: null,
  },

  QR_Number: {
    Generate_QR_Number_Response: null,
    latlongObject: null,
  },

  Connectivity: {
    End: null,
    index: 0,
    ConnectivityResponse: null,
    latlongObj: null,
    random_number: null,
  },
}

const SplashReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOGIN_REQUEST_WITHOUT_PARAMTER:
        break
      case types.LOGIN_RESPONSE_WITHOUT_PARAMTER_SUCCESS:
        draft.LoginResponse = action
        break
      case types.LOGIN_RESPONSE_WITHOUT_PARAMTER_FAILURE:
        break

      case types.LOGIN_REQUEST_WITH_PARAMTER:
        draft.lat = action.lat
        draft.long = action.long
        draft.random_number = action.random_number
        break
      case types.LOGIN_RESPONSE_WITH_PARAMTER_SUCCESS:
        draft.LoginWithoutParamResponse = action.response
        break
      case types.LOGIN_RESPONSE_WITH_PARAMTER_FAILURE:
        break
      case types.SERVICE_SPLASH_RESET:
        draft.Status.StatusResponse = null
        break

      case types.ENABLE_LOADER:
        draft.Loader = true
        break
      case types.DISABLE_LOADER:
        draft.Loader = false
        break

      // ###################

      case types.REQUEST_MANUAL_STATUS:
        draft.Status.StatusResponse2 = action.resp
        break

      case types.REQUEST_STATUS:
        draft.token.ApiToken = action.ApiToken
        draft.token.ProfileToken = action.ProfileToken
        break
      case types.SET_API_TOKEN:
        draft.token.ApiToken = action.ApiToken
        break
      case types.STATUS_RESPONSE_SUCCESS:
        draft.Status.StatusResponse = action.response
        break

      case types.STATUS_RESPONSE_FAILURE:
        break

      // ###################
      case types.SPLASH_GENERATE_QR_CODE_REQUEST:
        draft.token.ApiToken = action.ApiToken
        draft.QR_Number.latlongObject = action.latlongObject
        break
      case types.SPLASH_GENERATE_QR_CODE_RESPONSE_SUCESS:
        draft.QR_Number.Generate_QR_Number_Response = action.response
        break
      case types.SPLASH_GENERATE_QR_CODE_RESPONSE_FAILURE:
        break

      // ###################
      case types.SPLASH_CONNECTIVITY_REQUEST:
        draft.token.ApiToken = action.ApiToken
        draft.Connectivity.latlongObj = action.latlongObj
        draft.Connectivity.random_number = action.random_number
        break
      case types.SPLASH_CONNECTIVITY_RESPONSE_SUCESS:
        draft.Connectivity.ConnectivityResponse = action.response
        break
      case types.SPLASH_CONNECTIVITY_RESPONSE_FAILURE:
        break

      // ###################
      case types.SPLASH_INCREMENT_REQUEST:
        console.log('reducer: ', action.index)
        action.index === undefined
          ? (draft.Connectivity.index = draft.Connectivity.index + 1)
          : (draft.Connectivity.index = action.index)
        break

      // ###################
      case types.SPLASH_END_REQUEST:
        draft.Connectivity.End = action.value
        break

      case 'splash_back':
        return initialState
      default:
        return state
    }
  })

export default SplashReducer
