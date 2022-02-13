import * as types from './type'

export function OnLoginRequestWithoutParameter() {
  return {
    type: types.LOGIN_REQUEST_WITHOUT_PARAMTER,
  }
}

export function OnLoginResponseWithoutParameterSuccess(LoginResponse) {
  return {
    type: types.LOGIN_RESPONSE_WITHOUT_PARAMTER_SUCCESS,
    LoginResponse,
  }
}

export function OnLoginResponseWithoutParameterFailure(LoginResponse) {
  return {
    type: types.LOGIN_RESPONSE_WITHOUT_PARAMTER_FAILURE,
  }
}

export function OnLoginRequestWithParameter(lat, long, random_number) {
  return {
    type: types.LOGIN_REQUEST_WITH_PARAMTER,
    lat,
    long,
    random_number,
  }
}

export function OnLoginResponseWithParameterSuccess(LoginWithoutParamResponse) {
  return {
    type: types.LOGIN_RESPONSE_WITH_PARAMTER_SUCCESS,
    LoginWithoutParamResponse,
  }
}

export function OnLoginResponseWithParameterFailure(LoginResponse) {
  return {
    type: types.LOGIN_RESPONSE_WITH_PARAMTER_FAILURE,
  }
}

export function OnManualStatusResponseSuccess(resp) {
  return {
    type: types.REQUEST_MANUAL_STATUS,
    resp,
  }
}

export function OnStatusRequest(ApiToken, ProfileToken) {
  return {
    type: types.REQUEST_STATUS,
    ApiToken,
    ProfileToken,
  }
}

export function OnStatusResponseSuccess(response) {
  return {
    type: types.STATUS_RESPONSE_SUCCESS,
    response,
  }
}

export function OnStatusResponseFailure() {
  return {
    type: types.STATUS_RESPONSE_FAILURE,
  }
}

export function OnEnableLoader() {
  return {
    type: types.ENABLE_LOADER,
    Loader: true,
  }
}

export function OnDisableLoader() {
  return {
    type: types.DISABLE_LOADER,
    Loader: false,
  }
}

export function OnSplashBackup() {
  return {
    type: 'splash_back',
  }
}

// ##############
export function OnSplashGenerateQRNumberRequest(ApiToken, latlongObject) {
  return {
    type: types.SPLASH_GENERATE_QR_CODE_REQUEST,
    ApiToken,
    latlongObject,
  }
}

export function OnSplashGenerateQRNumberResponseSuccess(response) {
  return {
    type: types.SPLASH_GENERATE_QR_CODE_RESPONSE_SUCESS,
    response,
  }
}

export function OnSplashGenerateQRNumberResponseFailure(error) {
  return {
    type: types.SPLASH_GENERATE_QR_CODE_RESPONSE_FAILURE,
    error,
  }
}

// ##############
export function OnSplashConnectivityRequest(
  ApiToken,
  latlongObj,
  random_number
) {
  return {
    type: types.SPLASH_CONNECTIVITY_REQUEST,
    ApiToken,
    latlongObj,
    random_number,
  }
}

export function OnSplashConnectivityResponseSuccess(response) {
  return {
    type: types.SPLASH_CONNECTIVITY_RESPONSE_SUCESS,
    response,
  }
}

export function OnSplashConnectivityResponseFailure() {
  return {
    type: types.SPLASH_CONNECTIVITY_RESPONSE_FAILURE,
  }
}

// ##############
export function OnSplashIncremntRequest(index) {
  return {
    type: types.SPLASH_INCREMENT_REQUEST,
    index,
  }
}

// ##############
export function OnSplashEndRequest(value) {
  return {
    type: types.SPLASH_END_REQUEST,
    value,
  }
}

// Notifications Binding

export function NotificationBindingRequest(ApiToken, bindingObject) {
  return {
    type: types.NOTIFICATION_BINDING_REQUEST,
    ApiToken,
    bindingObject,
  }
}
export function NotificationBindingSuccess(response) {
  return {
    type: types.NOTIFICATION_BINDING_SUCCESS,
    response,
  }
}
export function NotificationBindingFail(error) {
  return {
    type: types.NOTIFICATION_BINDING_FAIL,
    error,
  }
}
