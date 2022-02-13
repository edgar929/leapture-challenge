import ApiConstant from '../ApiConstant'

export function requests(path, params, method, token, headerType, contentType) {
  let head
  let options
  let BodyParam
  if (contentType === 'urlencoded') {
    head = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...(token && { token: token }),
    }
    BodyParam = Object.entries(params)
      .map((e) => e.join('='))
      .join('&')
  } else if (contentType === 'body') {
    head = {
      'Content-Type': 'application/json',
      ...(token && { token: token }),
    }
    BodyParam = JSON.stringify(params)
  } else if (contentType === 'param') {
    head = {
      ...(token && { token: token }),
    }
  }

  let nextHeader
  if (headerType != null) {
    nextHeader = { ...head, ...headerType }
  } else {
    nextHeader = head
  }

  options = {
    headers: nextHeader,
    method: method,
    ...(params && { body: BodyParam }),
  }

  return fetch(ApiConstant.BASE_URL + path, options)
    .then((response) => {
      const statusCode = response.status
      const data = response.json()
      // console.log(
      //     `%c  ${path}: \n${response} `,
      //     'background: green; color: white'
      // )

      console.log('request: ', response)
      return Promise.all([statusCode, data])
    })
    .then(function (response) {
      console.log('\n')
      console.log(`%c  ${path}:`, 'background: green; color: white')
      console.log('Headers: ', options)
      console.log('Response: ', response[1])

      return { status: response[0], data: response[1], error: response[1] }
    })
    .catch((error) => {
      return {
        status: ApiConstant.STATUS_CODES.BAD_REQUEST,
        data: error,
        error: error,
      }
    })
}

export function requests2(
  path,
  params,
  method,
  token,
  headerType,
  contentType
) {
  let head
  let options
  let BodyParam
  if (contentType === 'urlencoded') {
    head = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...(token && { token: token }),
    }
    BodyParam = Object.entries(params)
      .map((e) => e.join('='))
      .join('&')
  } else if (contentType === 'body') {
    head = {
      'Content-Type': 'application/json',
      ...(token && { token: token }),
    }
    BodyParam = JSON.stringify(params)
  } else if (contentType === 'param') {
    head = {
      ...(token && { token: token }),
    }
  }

  let nextHeader
  if (headerType != null) {
    nextHeader = { ...head, ...headerType }
  } else {
    nextHeader = head
  }

  options = {
    headers: nextHeader,
    method: method,
    ...(params && { body: BodyParam }),
  }

  return fetch(ApiConstant.LEAPCHAT_BASE_URL + path, options)
    .then((response) => {
      const statusCode = response.status
      const data = response.json()
      return Promise.all([statusCode, data])
    })
    .then(function (response) {
      return { status: response[0], data: response[1], error: response[1] }
    })
    .catch((error) => {
      return {
        status: ApiConstant.STATUS_CODES.BAD_REQUEST,
        data: error,
        error: error,
      }
    })
}

export function BankingRequest(
  path,
  params,
  method,
  token,
  headerType,
  contentType
) {
  let head
  let options
  let BodyParam
  if (contentType === 'urlencoded') {
    head = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...(token && { token: token }),
    }
    BodyParam = Object.entries(params)
      .map((e) => e.join('='))
      .join('&')
  } else if (contentType === 'body') {
    head = {
      'Content-Type': 'application/json',
      ...(token && { token: token }),
    }
    BodyParam = JSON.stringify(params)
  } else if (contentType === 'param') {
    head = {
      ...(token && { token: token }),
    }
  }

  let nextHeader
  if (headerType != null) {
    nextHeader = { ...head, ...headerType }
  } else {
    nextHeader = head
  }

  options = {
    headers: nextHeader,
    method: method,
    ...(params && { body: BodyParam }),
  }

  // console.log("options: ", options)
  // console.log("options: ", ApiConstant.LEAPBANKING_BASE_URL + path)

  return fetch(ApiConstant.LEAPBANKING_BASE_URL + path, options)
    .then((response) => {
      const statusCode = response.status
      // console.log('code ', statusCode)
      const data = response.json()
      return Promise.all([statusCode, data])
    })
    .then(function (response) {
      return { status: response[0], data: response[1], error: response[1] }
    })
    .catch((error) => {
      return {
        status: ApiConstant.STATUS_CODES.BAD_REQUEST,
        data: error,
        error: error,
      }
    })
}

export function socialRequests(
  path,
  params,
  method,
  token,
  headerType,
  contentType
) {
  let head
  let options
  let BodyParam
  if (contentType === 'urlencoded') {
    head = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...(token && { token: token }),
    }
    BodyParam = Object.entries(params)
      .map((e) => e.join('='))
      .join('&')
  } else if (contentType === 'body') {
    head = {
      'Content-Type': 'application/json',
      ...(token && { token: token }),
    }
    BodyParam = JSON.stringify(params)
  } else if (contentType === 'param') {
    head = {
      ...(token && { token: token }),
    }
  }

  let nextHeader
  if (headerType != null) {
    nextHeader = { ...head, ...headerType }
  } else {
    nextHeader = head
  }

  options = {
    headers: nextHeader,
    method: method,
    ...(params && { body: BodyParam }),
  }

  console.log('SAGA Path: ', path)
  console.log('SAGA Options: ', options)

  return fetch(path, options)
    .then((response) => {
      const statusCode = response.status
      const data = response.json()
      console.log('request: ', response)
      return Promise.all([statusCode, data])
    })
    .then(function (response) {
      console.log('\n')
      console.log(`%c  ${path}:`, 'background: green; color: white')
      console.log('Headers: ', options)
      console.log('Response: ', response[1])

      return { status: response[0], data: response[1], error: response[1] }
    })
    .catch((error) => {
      return {
        status: ApiConstant.STATUS_CODES.BAD_REQUEST,
        data: error,
        error: error,
      }
    })
}
