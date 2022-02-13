import { put, call } from 'redux-saga/effects'
import { Send_QR_REQUEST } from '../../../api/modules/Splash'
import * as actions from './action'
import ApiConstant from '../../../api/ApiConstant'
import * as Body from '../../../api/modules/Splash'

export function* LoginAsync(action) {
  console.log('Login Called')

  yield put(actions.OnEnableLoader())
}

export function* QR_Request(action) {
  yield put(actions.OnEnableLoader())

  const { status, data, error } = yield call(Send_QR_REQUEST)

  if (
    status === ApiConstant.STATUS_CODES.SUCCESS_OK ||
    status === ApiConstant.STATUS_CODES.SUCCESS_CREATED
  ) {
    yield put(actions.OnDisableLoader())
    yield put(actions.OnLoginResponseWithoutParameterSuccess(data))
  } else {
    yield put(actions.OnDisableLoader())
    yield put(actions.OnLoginResponseWithoutParameterFailure())
    alert(error)
  }
}

export function* Status(action) {
  yield put(actions.OnEnableLoader())

  const { status, data, error } = yield call(
    Body.StatusRequest,
    action.ApiToken,
    action.ProfileToken
  )

  // alert(status)

  if (
    status === ApiConstant.STATUS_CODES.SUCCESS_OK ||
    status === ApiConstant.STATUS_CODES.SUCCESS_CREATED
  ) {
    yield put(actions.OnDisableLoader())
    yield put(actions.OnStatusResponseSuccess(data))
  } else if (status === ApiConstant.STATUS_CODES.NOT_VALID_TOKEN) {
    yield put(actions.OnDisableLoader())
    yield put(actions.OnStatusResponseFailure(error))
  } else {
    yield put(actions.OnDisableLoader())
    yield put(actions.OnStatusResponseFailure(error))
  }
}

export function* generate_QR_Number(action) {
  yield put(actions.OnEnableLoader())

  const { status, data, error } = yield call(
    Body.GenerateNumber,
    action.ApiToken,
    action.latlongObject
  )

  if (
    status === ApiConstant.STATUS_CODES.SUCCESS_OK ||
    status === ApiConstant.STATUS_CODES.SUCCESS_CREATED
  ) {
    yield put(actions.OnDisableLoader())
    yield put(actions.OnSplashGenerateQRNumberResponseSuccess(data))
  } else {
    yield put(actions.OnDisableLoader())
    yield put(actions.OnSplashGenerateQRNumberResponseFailure(error))
  }
}

export function* Connectivity(action) {
  yield put(actions.OnEnableLoader())

  const { status, data, error } = yield call(
    Body.Connectivities,
    action.ApiToken,
    action.latlongObj,
    action.random_number
  )

  if (
    status === ApiConstant.STATUS_CODES.SUCCESS_OK ||
    status === ApiConstant.STATUS_CODES.SUCCESS_CREATED
  ) {
    yield put(actions.OnDisableLoader())
    yield put(actions.OnSplashConnectivityResponseSuccess(data))
  } else {
    yield put(actions.OnDisableLoader())
    yield put(actions.OnSplashConnectivityResponseFailure(error))
  }
}
export function* NotificationsBinding(action) {
  yield put(actions.OnEnableLoader())

  const { status, data, error } = yield call(
    Body.Notifications,
    action.ApiToken,
    action.bindingObject
  )

  console.log('BindingDebugSaga: ', status, data, error)

  if (
    status === ApiConstant.STATUS_CODES.SUCCESS_OK ||
    status === ApiConstant.STATUS_CODES.SUCCESS_CREATED
  ) {
    yield put(actions.OnDisableLoader())
    yield put(actions.NotificationBindingSuccess(data))
  } else {
    yield put(actions.OnDisableLoader())
    yield put(actions.NotificationBindingFail(error))
  }
}
