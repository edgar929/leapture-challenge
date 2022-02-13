import ApiConstant from '../ApiConstant'
import { requests } from '../request/request'

export function Send_QR_REQUEST(ApiToken) {
  return requests(
    ApiConstant.param,
    null,
    'get',
    null,
    { ApiToken: ApiToken },
    'param'
  )
}

export function StatusRequest(ApiToken, ProfileToken) {
  return requests(
    ApiConstant.StatusParam,
    null,
    ApiConstant.get,
    null,
    {
      Authorization: `Bearer ${ProfileToken}`,
      ApiToken: ApiToken,
    },
    ApiConstant.param
  )
}

export function GenerateNumber(ApiToken, latlongObject) {
  return requests(
    `${ApiConstant.GenerateQRNumberParam}?lat=${latlongObject.lat}&long=${latlongObject.long}`,
    null,
    ApiConstant.get,
    null,
    {
      ApiToken: ApiToken,
    },
    ApiConstant.param
  )
}

export function Connectivities(ApiToken, latlongObj, random_number) {
  return requests(
    `${ApiConstant.GenerateQRNumberParam}?lat=${latlongObj.lat}&long=${latlongObj.long}&random_number=${random_number}`,
    null,
    ApiConstant.get,
    null,
    {
      ApiToken: ApiToken,
    },
    ApiConstant.param
  )
}
export function Notifications(ApiToken, bindingObject) {
  return requests(
    `${ApiConstant.NotificationsBinding}`,
    bindingObject,
    ApiConstant.post,
    null,
    {
      ApiToken: ApiToken,
      'Content-Type': 'application/json',
    },
    ApiConstant.body
  )
}
